"use client"
import { DataTable, DataTableColumn } from "@/pp/components/ui/DataTable/DataTable";
import { Pagination } from "@/typesAPI/common.types";
import { Tenant } from "@/typesModels/Tenant";

interface TenantsViewProps {
    tenants: Tenant[];
    pagination: Pagination;
    success?: boolean;
}

export const TenantsView = ({ tenants, pagination, success }: TenantsViewProps) => {
    return (
        <DataTable<Tenant>
            data={tenants || []}
            columns={columns}
            pagination={pagination}
            success={success}
            filters={[
                { id: '1', key: 'subscription', value: '1', label: 'Free', type: 'string', nameGroup: 'Suscripción' },
                { id: '2', key: 'subscription', value: '2', label: 'Basic', type: 'string', nameGroup: 'Suscripción' },
                { id: '3', key: 'subscription', value: '3', label: 'Premium', type: 'string', nameGroup: 'Suscripción' },
                { id: '4', key: 'subscription', value: '4', label: 'Enterprise', type: 'string', nameGroup: 'Suscripción' },
                { id: '5', key: 'subscription', value: '5', label: 'Intertal', type: 'string', nameGroup: 'Suscripción' },
                { id: '6', key: 'status', value: '1', label: 'Activo', type: 'boolean', nameGroup: 'Estado' },
                { id: '7', key: 'status', value: '2', label: 'Trial', type: 'boolean', nameGroup: 'Estado' },
                { id: '8', key: 'status', value: '3', label: 'Expirado', type: 'boolean', nameGroup: 'Estado' },
                { id: '9', key: 'status', value: '4', label: 'Suspensión', type: 'boolean', nameGroup: 'Estado' },
                { id: '10', key: 'status', value: '5', label: 'Cancelado', type: 'boolean', nameGroup: 'Estado' },
            ]}
        />
    );
}


const columns: DataTableColumn<Tenant>[] = [
    {
        sortKey: 'id',
        type: 'number',
        width: '100px',
        align: 'center',
        isSortable: true,
        render: (tenant) => tenant.id,
    },
    {
        sortKey: 'name',
        type: 'string',
        width: '200px',
        align: 'left',
        isSortable: true,
        render: (tenant) => tenant.name,
    },
    {
        sortKey: 'subscription',
        type: 'string',
        width: '150px',
        align: 'center',
        isSortable: true,
        render: (tenant) => tenant.subscription,
    },
    {
        sortKey: 'status',
        type: 'string',
        width: '150px',
        align: 'center',
        isSortable: true,
        render: (tenant) => tenant.status,
    },
    {
        sortKey: 'isActive',
        type: 'boolean',
        width: '150px',
        align: 'center',
        isSortable: true,
        render: (tenant) => tenant.isActive,
    },
]