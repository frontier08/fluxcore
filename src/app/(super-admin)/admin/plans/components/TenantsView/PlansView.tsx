"use client"
import { DataTable, DataTableColumn } from "@/pp/components/ui/DataTable/DataTable";
import { Pagination } from "@/typesAPI/common.types";
import { Plan, PlanStatusType } from "@/typesAPI/plan.types";
import { Tenant } from "@/typesModels/Tenant";
import { Tag } from "lambda-ui-components";
import styles from "./PlansView.module.scss";
import { formatDateTimeShort } from "@/utils/common-utils";

interface PlansViewProps {
    plans: Plan[];
    pagination: Pagination;
    success?: boolean;
}

export const PlansView = ({ plans, pagination, success }: PlansViewProps) => {
    console.log(plans);
    return (
        <DataTable<Plan>
            data={plans || []}
            columns={columns}
            pagination={pagination}
            success={success}
            actions={[
                "view",
                "edit",
                "delete"
            ]}
            filters={[
                { id: '1', key: 'subscription', value: '1', label: 'Free', type: 'multiple-choice', nameGroup: 'Suscripción' },
                { id: '2', key: 'subscription', value: '2', label: 'Basic', type: 'multiple-choice', nameGroup: 'Suscripción' },
                { id: '3', key: 'subscription', value: '3', label: 'Premium', type: 'multiple-choice', nameGroup: 'Suscripción' },
                { id: '4', key: 'subscription', value: '4', label: 'Enterprise', type: 'multiple-choice', nameGroup: 'Suscripción' },
                { id: '5', key: 'subscription', value: '5', label: 'Intertal', type: 'multiple-choice', nameGroup: 'Suscripción' },
                { id: '6', key: 'status', value: '1', label: 'Activo', type: 'multiple-choice', nameGroup: 'Estado' },
                { id: '7', key: 'status', value: '2', label: 'Trial', type: 'multiple-choice', nameGroup: 'Estado' },
                { id: '8', key: 'status', value: '3', label: 'Expirado', type: 'multiple-choice', nameGroup: 'Estado' },
                { id: '9', key: 'status', value: '4', label: 'Suspensión', type: 'multiple-choice', nameGroup: 'Estado' },
                { id: '10', key: 'status', value: '5', label: 'Cancelado', type: 'multiple-choice', nameGroup: 'Estado' },
                { id: '11', key: 'isActive', value: 'true', label: 'Activo', optionalLabel: 'Inactivo', type: 'boolean', nameGroup: 'Acceso' },
                { id: '12', key: 'createdFrom', value: '2022-01-01', label: 'Desde', type: 'date', nameGroup: 'Fecha de creación' },
                { id: '13', key: 'createdTo', value: '2022-01-01', label: 'Hasta', type: 'date', nameGroup: 'Fecha de creación' },
            ]}
        />
    );
}


const columns: DataTableColumn<Plan>[] = [
    {
        sortKey: 'id',
        nameColumn: 'Id',
        type: 'number',
        width: '75px',
        align: 'center',
        isSortable: true,
        render: (plan) => plan.id,
    },
    {
        sortKey: 'name',
        nameColumn: 'Nombre',
        type: 'string',
        width: '200px',
        align: 'left',
        isSortable: true,
        render: (plan) => plan.name,
    },
    {
        sortKey: 'companyName',
        nameColumn: 'Descripción',
        type: 'string',
        width: '200px',
        align: 'center',
        isSortable: true,
        render: (plan) => plan.description,
    },
    {
        sortKey: 'type',
        nameColumn: 'Tipo',
        type: 'string',
        width: '125px',
        align: 'center',
        isSortable: true,
        render: (plan) => <div className={`${styles.subscription} ${styles["subscription_" + plan.type?.toLowerCase()]}`}>{plan.type}</div>,
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
        width: '125px',
        align: 'center',
        isSortable: true,
        render: (plan) => formatDateTimeShort(plan.createdAt.toString()),
    },
    {
        sortKey: 'lastModifiedAt',
        nameColumn: 'Actualizado',
        type: 'date',
        width: '125px',
        align: 'center',
        isSortable: true,
        render: (plan) => formatDateTimeShort(plan.lastModifiedAt.toString()),
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