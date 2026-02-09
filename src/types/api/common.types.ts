import { ErrorMessages } from "../../lib/errors/message-errors";

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

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    timestamp: Date;
    traceId?: string;
    data?: T;
    errors?: ApiError[];
    code?: keyof typeof ErrorMessages;
}

export interface PagedResponse<T> extends ApiResponse<T[]> {
    data: T[];
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    totalRecords: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}

export interface BaseParams {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortDirection?: string;
    search?: string;
}