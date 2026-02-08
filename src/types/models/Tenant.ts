import { PlanStatusType, SubscriptionType } from "@/typesAPI/plan.types";


/*
public class TenantResponse
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int? CurrentSubscriptionId { get; set; }
    public string? CompanyName { get; set; }
    public string? TaxId { get; set; }
    public string? Address { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
    public string? LogoUrl { get; set; }
    public string Status { get; set; } = string.Empty;
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime? LastModifiedAt { get; set; }
}
*/

export interface Tenant {
    id: number;
    name: string;
    currentSubscriptionId: number;
    companyName: string;
    taxId: string;
    address: string;
    phone: string;
    email: string;
    logoUrl: string;
    status: PlanStatusType;
    subscription: SubscriptionType;
    isActive: boolean;
    createdAt: string;
    lastModifiedAt: string;
}