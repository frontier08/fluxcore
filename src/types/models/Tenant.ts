import { PlanStatusType } from "@/typesAPI/plan.types";


export interface Tenant {
    id: string;
    name: string;
    subscription: string;
    isActive: boolean;
    status: PlanStatusType;
    validUntil: string;
    createdAt: string;
}