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

/*
public abstract class ApiResponse
{
    /// <summary>
    /// Respuesta base de la API
    /// </summary>
    [JsonPropertyOrder(-4)]
    public bool Success { get; set; }
    public string? Message { get; set; }
    public DateTime Timestamp { get; set; }
    public string? TraceId { get; set; }

    protected ApiResponse()
    {
        Timestamp = DateTime.UtcNow;
    }


}
*/

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
