"use client"
import styles from './DataTable.module.scss'
import { Button, Checkbox, Divider, Dropdown, Input, Join, Table } from 'lambda-ui-components';
import { Filter, Search } from 'lucide-react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Pagination } from '@/typesAPI/common.types';
import { Fragment, useState } from 'react';
import { TableError } from '@/pp/components/ui/TableError/TableError';
import { useDebouncedCallback } from '@/hooks/useDebounce';

export interface DataTableColumn<T> {
    sortKey: string;
    type?: "string" | "number" | "date" | "boolean";
    width?: string;
    align?: "left" | "center" | "right";
    isSortable?: boolean;
    render?: (value: T) => React.ReactNode;
}

type FilterType = "string" | "number" | "date" | "boolean";

interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    pagination?: Pagination;
    success?: boolean;
    filters?: {
        id?: string,
        key: string,
        value: string,
        label: string,
        type: FilterType,
        nameGroup: string
    }[];
}

export const DataTable = <T extends { id: string | number }>({
    data,
    columns,
    pagination,
    success,
    filters
}: DataTableProps<T>) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [search, setSearch] = useState(searchParams.get('search') || '');
    const router = useRouter();

    console.log(data);

    const paginationParams = ['page', 'pageSize'];
    const currentKeys = Array.from(searchParams.keys());
    const isSearchActive = currentKeys.some(key => !paginationParams.includes(key));

    const handleSearchURL = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }

        params.set('page', '1');
        router.replace(`${pathname}?${params.toString()}`);
    }, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
        handleSearchURL(searchValue);
    }


    const handleFilter = (filter: string, value: string, checked: boolean, type: FilterType) => {
        const params = new URLSearchParams(searchParams);
        const currentVal = params.get(filter);
        let values = currentVal ? currentVal.split(',') : [];

        if (checked) {
            if (!values.includes(value)) {
                values.push(value);
            }
        } else {
            values = values.filter(v => v !== value);
        }

        if (values.length > 0) {
            params.set(filter, values.join(','));
        } else {
            params.delete(filter);
        }

        params.set('page', '1');
        router.replace(`${pathname}?${params.toString()}`);
    }

    //Agrupar filtros por valor
    const filterByValue = filters?.reduce((acc, filter) => {
        if (!acc[filter.nameGroup]) {
            acc[filter.nameGroup] = [];
        }
        acc[filter.nameGroup].push(filter);
        return acc;
    }, {} as Record<string, typeof filters>);

    return (
        <div className={styles.datatable}>
            <header className={styles.datatable_header}>
                <Join size="small" >
                    <Input placeholder="Buscar" type="search" onChange={handleSearch} value={search} />
                </Join>
                <Dropdown
                    onSelect={(value) => console.log(value)}
                    icon={<Filter />}
                    size='small'
                    variant='solid'
                >
                    {filterByValue && Object.keys(filterByValue).map((key) => (
                        <Fragment key={key}>
                            <Divider contentPosition='start' color='neutral'>{filterByValue[key][0].nameGroup}</Divider>
                            {
                                filterByValue[key].map((filter) => (
                                    <Dropdown.ItemCustom key={filter.id} >
                                        <Checkbox
                                            label={filter.label}
                                            size='tiny'
                                            color='secondary'
                                            checked={searchParams.get(filter.key)?.split(',').includes(filter.value) || false}
                                            onChange={(e) => {
                                                handleFilter(filter.key, filter.value, e.target.checked, filter.type);
                                            }}
                                        />
                                    </Dropdown.ItemCustom>
                                ))
                            }
                        </Fragment>
                    ))}
                </Dropdown>
            </header>
            <div>
                <Table
                    data={data}
                    size='tiny'
                    onSortColumn={(sortKey, direction) => console.log(sortKey, direction)}
                    highlightOnHover
                    pagination={pagination && pagination.totalPages > 1 ? {
                        page: pagination?.page,
                        totalPages: pagination?.totalPages,
                        totalRows: pagination?.totalRecords,
                        onPageChange: (page) => router.push(`/admin/tenants?page=${page}`),

                    } : undefined}>
                    <Table.Header>
                        <Table.Row>
                            {columns.map((column) => (
                                <Table.ColumnHeader
                                    key={column.sortKey}
                                    sortKey={column.sortKey}
                                    width={column.width}
                                    isSortable={column.isSortable}
                                >
                                    {column.sortKey.charAt(0).toUpperCase() + column.sortKey.slice(1)}
                                </Table.ColumnHeader>
                            ))}
                            {/*<Table.ColumnHeader sortKey="id" width='3rem' >Id</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="name" width='100%'>Nombre</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="subscription" width='15rem'>Suscripción</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="isActive" width='7rem'>Estado</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="createdAt" width='20rem'>Fecha de creación</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="actions" width='10rem'>Acciones</Table.ColumnHeader>*/}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map((item) => (
                            <Table.Row key={item.id}>
                                {columns.map((col, index) => (
                                    <Table.Cell key={`${item.id}-${index}`} align={col.align || 'left'}>
                                        {/* Aquí ejecutamos la función render de la columna */}
                                        {col.render && col.render(item)}
                                    </Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                        {/*<Table.Cell align="center">{tenant.id}</Table.Cell>
                                <Table.Cell>{tenant.name}</Table.Cell>
                                <Table.Cell align="center"><Tag variant="soft" color={colorSubscription(tenant.subscription)}>{tenant.subscription}</Tag></Table.Cell>
                                <Table.Cell align="center"><Tag color={tenant.isActive ? 'success' : 'warning'}>{tenant.isActive ? 'Activo' : 'Inactivo'}</Tag></Table.Cell>
                                <Table.Cell align="center">{formatDateTimeShort(tenant.createdAt)}</Table.Cell>
                                <Table.Cell align="center">
                                    <div className={styles.table_actions}>
                                        <Button variant="soft" size="tiny" color="neutral" icon={<Eye />} />
                                        <Button variant="soft" size="tiny" color="info" icon={<Pencil />} />
                                        <Button variant="soft" size="tiny" color="danger" icon={<Trash2 />} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}*/}
                    </Table.Body>
                </Table>
            </div>
            <TableError
                isSearch={isSearchActive}
                isEmptyResponse={data?.length === 0}
                isError={!success}
                onResetFilters={() => {
                    setSearch('');
                    router.replace(`${pathname}?page=1`);
                }}
            />
        </div>
    );
}

const colorSubscription = (subscription: string) => {
    switch (subscription) {
        case 'Free':
            return 'warning';
        case 'Standard':
            return 'success';
        case 'Enterprise':
            return 'info';
        default:
            return 'neutral';
    }
}