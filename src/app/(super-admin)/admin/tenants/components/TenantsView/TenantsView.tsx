"use client"
import { DataTable, DataTableColumn } from "@/pp/components/ui/DataTable/DataTable";
import { Pagination } from "@/typesAPI/common.types";
import { PlanStatusType } from "@/typesAPI/plan.types";
import { Tenant } from "@/typesModels/Tenant";
import { Button, Tag } from "lambda-ui-components";
import styles from "./TenantsView.module.scss";
import { formatDateTimeShort } from "@/utils/common-utils";
import { Eye, Pencil, Trash2 } from "lucide-react";

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
            actions={[
                "view",
                "edit",
                "delete"
            ]}
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
                { id: '11', key: 'isActive', value: 'true', label: 'Acceso', type: 'boolean', nameGroup: 'Acceso' },
                { id: '12', key: 'isActive', value: 'false', label: 'Sin acceso', type: 'boolean', nameGroup: 'Acceso' },
                { id: '13', key: 'createdFrom', value: '2022-01-01', label: 'Desde', type: 'date', nameGroup: 'Fecha de creación' },
                { id: '14', key: 'createdTo', value: '2022-01-01', label: 'Hasta', type: 'date', nameGroup: 'Fecha de creación' },
                { id: '15', key: 'validUntilFrom', value: '2022-01-01', label: 'Desde', type: 'date', nameGroup: 'Fecha de expiración' },
                { id: '16', key: 'validUntilTo', value: '2022-01-01', label: 'Hasta', type: 'date', nameGroup: 'Fecha de expiración' },
            ]}
        />
    );
}


const columns: DataTableColumn<Tenant>[] = [
    {
        sortKey: 'id',
        nameColumn: 'Id',
        type: 'number',
        width: '40px',
        align: 'center',
        isSortable: true,
        render: (tenant) => tenant.id,
    },
    {
        sortKey: 'name',
        nameColumn: 'Nombre',
        type: 'string',
        width: '200px',
        align: 'left',
        isSortable: true,
        render: (tenant) => tenant.name,
    },
    {
        sortKey: 'subscription',
        nameColumn: 'Suscripción',
        type: 'string',
        width: '120px',
        align: 'center',
        isSortable: true,
        render: (tenant) => <div className={`${styles.subscription} ${styles["subscription_" + tenant.subscription.toLowerCase()]}`}>{tenant.subscription}</div>,
    },
    {
        sortKey: 'status',
        nameColumn: 'Estado',
        type: 'string',
        width: '100px',
        align: 'center',
        isSortable: true,
        render: (tenant) => statusComponent(tenant),
    },
    {
        sortKey: 'isActive',
        nameColumn: 'Acceso',
        type: 'boolean',
        width: '100px',
        align: 'center',
        isSortable: true,
        render: (tenant) => {
            return (
                tenant.isActive ?
                    <Tag variant="subtle" color="success">Activo</Tag> :
                    <Tag variant="subtle" color="danger">Inactivo</Tag>
            )
        },
    },
    {
        sortKey: 'createdAt',
        nameColumn: 'Creado',
        type: 'date',
        width: '90px',
        align: 'center',
        isSortable: true,
        render: (tenant) => formatDateTimeShort(tenant.createdAt),
    },
    {
        sortKey: 'validUntil',
        nameColumn: 'Válido hasta',
        type: 'date',
        width: '90px',
        align: 'center',
        isSortable: true,
        render: (tenant) => formatDateTimeShort(tenant.validUntil),
    }
]




const statusComponent = (tenant: Tenant) => {
    switch (tenant.status) {
        case PlanStatusType.ACTIVE:
            return <Tag variant="subtle" color="success">Activo</Tag>
        case PlanStatusType.TRIAL:
            return <Tag variant="subtle" color="warning">Trial</Tag>
        case PlanStatusType.EXPIRED:
            return <Tag variant="subtle" color="danger">Expirado</Tag>
        case PlanStatusType.SUSPENDED:
            return <Tag variant="subtle" color="danger">Suspensión</Tag>
        case PlanStatusType.CANCELLED:
            return <Tag variant="subtle" color="danger">Cancelado</Tag>
        default:
            return <Tag variant="subtle" color="danger">Inactivo</Tag>
    }
}