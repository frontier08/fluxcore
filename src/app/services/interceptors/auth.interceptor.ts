
import { useAuthStore } from "@/app/store/auth.store";
import { apiFluxCore } from "../api/axios-instance";
import { authService } from "../api/auth.service";
import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ApiResponse } from "@/typesAPI/common.types";

apiFluxCore.interceptors.request.use(
    (config) => {
        const { accessToken } = useAuthStore.getState();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let isRefreshing = false;
let failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: any) => void;
}> = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

apiFluxCore.interceptors.response.use(
    (response) => {
        if (response.data?.accessToken) {
            useAuthStore.getState().setAccessToken(response.data.accessToken);
        }

        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _retry?: boolean;
        };
        console.log("Entro al interceptor", error);
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        if (originalRequest.headers) {
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                        }
                        return apiFluxCore(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Llamar a refresh (refreshToken se envía en cookie automáticamente)
                const response = await authService.refreshToken();

                const newAccessToken = response;

                // Guardar nuevo token en memoria
                useAuthStore.getState().setAccessToken(newAccessToken);

                isRefreshing = false;
                processQueue(null, newAccessToken);

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                }

                return apiFluxCore(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError as AxiosError, null);
                isRefreshing = false;

                // Si falla el refresh, hacer logout
                useAuthStore.getState().logout();

                if (typeof window !== 'undefined') {
                    window.location.href = '/login';
                }

                return Promise.reject(refreshError);
            }
        }

        if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
            console.log("Entro a ECONNREFUSED");
            const errorResponse: ApiResponse<any> = {
                success: false,
                code: "DOMAIN_ERROR",
                message: 'Error al conectar con el servidor',
                data: null,
                timestamp: new Date(),
                traceId: ""

            };
            return Promise.reject(errorResponse);
        }

        return Promise.reject(error);
    }
);