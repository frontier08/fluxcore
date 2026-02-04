
export type ChartNumberType = "porcentage" | "number" | "currency" | "decimal";

export interface ChartData {
    name: string;
    [key: string]: number | string;
}

export interface ChartGroup {
    data: ChartData[];
    groups: string[];
}

