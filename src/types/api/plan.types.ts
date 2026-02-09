import { BaseParams } from "./common.types";

export enum SubscriptionType {
    FREE = 'FREE',
    BASIC = 'BASIC',
    PREMIUM = 'PREMIUM',
    ENTERPRISE = 'ENTERPRISE',
    INTERNAL = 'INTERNAL'
}

export enum PlanStatusType {
    ACTIVE = 'ACTIVE',
    TRIAL = 'TRIAL',
    EXPIRED = 'EXPIRED',
    SUSPENDED = 'SUSPENDED',
    CANCELLED = 'CANCELLED'
}

export interface Plan {
    id: number;
    name: string;
    description: string;
    type: SubscriptionType;
    monthlyPrice: number;
    quarterlyPrice: number;
    semiannualPrice: number;
    annualPrice: number;
    maxUsers: number;
    maxProducts: number;
    maxBranches: number;
    hasInventoryManagement: boolean;
    hasSalesReports: boolean;
    hasAdvancedReports: boolean;
    hasMultiCurrency: boolean;
    hasApiAccess: boolean;
    hasPrioritySupport: boolean;
    trialDays: number;
    features: string;
    isActive: boolean;
    createdAt: Date;
    lastModifiedAt: Date;
}

export interface GetPlansParams extends BaseParams {
    type?: SubscriptionType;
    isActive?: boolean;
    minPrice?: number;
    maxPrice?: number;
}

export interface UpdatePlan {
    name?: string;
    description?: string;
    monthlyPrice?: number;
    quarterlyPrice?: number;
    semiannualPrice?: number;
    annualPrice?: number;
    maxUsers?: number;
    maxProducts?: number;
    maxBranches?: number;
    hasInventoryManagement?: boolean;
    hasSalesReports?: boolean;
    hasAdvancedReports?: boolean;
    hasMultiCurrency?: boolean;
    hasApiAccess?: boolean;
    hasPrioritySupport?: boolean;
    trialDays?: number;
    features?: string;
}

export interface CreatePlan {
    name: string;
    description: string;
    type: SubscriptionType;
    monthlyPrice: number;
    quarterlyPrice: number;
    semiannualPrice: number;
    annualPrice: number;
    maxUsers: number;
    maxProducts: number;
    maxBranches: number;
    hasInventoryManagement: boolean;
    hasSalesReports: boolean;
    hasAdvancedReports: boolean;
    hasMultiCurrency: boolean;
    hasApiAccess: boolean;
    hasPrioritySupport: boolean;
    trialDays: number;
    features?: string;
}