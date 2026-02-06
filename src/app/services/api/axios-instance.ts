import axios, { AxiosRequestConfig } from "axios";
import { ErrorMessages } from "../../../lib/errors/message-errors";


export const apiFluxCore = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiFluxCoreServer = async () => {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();

    const token = cookieStore.get('accessToken')?.value;

    const instance = axios.create({
        ...apiFluxCore.defaults,
        headers: {
            ...apiFluxCore.defaults.headers,
            Authorization: token ? `Bearer ${token}` : '',
            Cookie: cookieStore.toString()
        }
    });

    return instance;
}

export const apiFluxCoreServerGet = async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
        const api = await apiFluxCoreServer();
        const response = await api.get<T>(url, config);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {

            let errorCode = "UNKNOWN_ERROR";
            let message = "Error inesperado.";

            // 1. DETECCIÓN DE SERVIDOR CAÍDO (Node.js) 🔌
            // ECONNREFUSED significa que nadie escucha en ese puerto (Backend apagado)
            if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
                errorCode = "NETWORK_ERROR";
                message = ErrorMessages.NETWORK_ERROR;
            }
            // 2. Errores HTTP estándar (404, 500, 401)
            else if (error.response) {
                const status = error.response.status;
                if (status === 500) errorCode = "SERVER_ERROR";
                if (status === 401) errorCode = "AUTH_USER_NOT_AUTHENTICATED";
                if (status === 429) errorCode = "RATE_LIMIT";
                message = ErrorMessages[errorCode];
            }

            return {
                data: null,
                success: false,
                errorCode,
                message
            };

        }
    }
};

export const apiFluxCoreServerPost = async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const api = await apiFluxCoreServer();
        const response = await api.post<T>(url, data, config);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};

export const apiFluxCoreServerPut = async <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    try {
        const api = await apiFluxCoreServer();
        const response = await api.put<T>(url, data, config);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};