
export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    timestamp: Date;
    traceId?: string;
    data?: T;
    errors?: ApiError[];
}


export interface ApiError {
    code: string;
    message: string;
}
