"use client";

import { FileSearchCorner, PackageOpen, TriangleAlert, RefreshCcw, Eraser, Plus } from 'lucide-react';
import { Button, Link } from 'lambda-ui-components';
import { useRouter, usePathname } from 'next/navigation';
import styles from './TableError.module.scss';
import { ReactNode } from 'react';

interface TableErrorProps {
    isSearch: boolean;
    isEmptyResponse: boolean;
    isError: boolean;
    onCreate?: () => void;
    onResetFilters?: () => void;
    onRetry?: () => void;
}

export const TableError = ({
    isSearch,
    isEmptyResponse,
    isError,
    onCreate,
    onResetFilters,
    onRetry
}: TableErrorProps) => {

    const router = useRouter();
    const pathname = usePathname();

    const handleRetry = onRetry || (() => router.refresh());
    const handleReset = onResetFilters || (() => router.replace(pathname));
    const handleCreate = onCreate || (() => router.push(`${pathname}/new`));

    if (!isError && !isSearch && !isEmptyResponse) return null;

    const stateConfig = getStateConfig(isError, isEmptyResponse, isSearch);

    if (!stateConfig) return null;

    const handleAction = () => {
        switch (stateConfig.actionType) {
            case 'retry': return handleRetry();
            case 'reset': return handleReset();
            case 'create': return handleCreate();
        }
    };

    return (
        <div className={styles.tableerror}>
            <div className={styles.tableerror_icon}>
                {stateConfig.icon}
            </div>
            <div className={styles.tableerror_content}>
                <h3>{stateConfig.title}</h3>
                <p>{stateConfig.message}</p>
                {stateConfig.showButton && (
                    <div className={styles.tableerror_action}>
                        <Button
                            variant={stateConfig.btnVariant}
                            color={stateConfig.btnColor}
                            icon={stateConfig.btnIcon}
                            onClick={handleAction}
                            size="small"
                            label={stateConfig.btnLabel}
                        />
                        {stateConfig.actionType === 'retry' && (
                            <Link
                                href="https://lambdaflux.com/soporte"
                                variant="soft"
                                color="info"
                                icon={<RefreshCcw size={16} />}
                                label="Contactar soporte"
                                size="small"
                                type='button'
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

interface StateConfig {
    icon: ReactNode;
    title: string;
    message: string;
    showButton: boolean;
    actionType: 'retry' | 'reset' | 'create';
    btnLabel: string;
    btnIcon: ReactNode;
    btnVariant: "solid" | "outline" | "soft" | "subtle";
    btnColor: "primary" | "secondary" | "neutral" | "info" | "success" | "danger" | "warning";
}

const getStateConfig = (isError: boolean, isEmptyResponse: boolean, isSearch: boolean): StateConfig | undefined => {

    if (isError) {
        return {
            icon: <TriangleAlert size={120} strokeWidth={1.5} />,
            title: "No pudimos cargar la información",
            message: "Ocurrió un problema técnico. Por favor, intenta recargar la página.",
            showButton: true,
            actionType: 'retry',
            btnLabel: "Reintentar conexión",
            btnIcon: <RefreshCcw size={16} />,
            btnVariant: "soft",
            btnColor: "danger"
        };
    }

    if (isSearch && isEmptyResponse) {
        return {
            icon: <FileSearchCorner size={120} strokeWidth={1.5} />,
            title: "Sin resultados para tu búsqueda",
            message: "No hay registros con los filtros actuales. Intenta limpiarlos.",
            showButton: true,
            actionType: 'reset',
            btnLabel: "Limpiar filtros",
            btnIcon: <Eraser size={16} />,
            btnVariant: "soft",
            btnColor: "info"
        };
    }

    if (isEmptyResponse) {
        return {
            icon: <PackageOpen size={120} strokeWidth={1.5} />,
            title: "Comienza a agregar contenido",
            message: "Aún no hay registros. Crea el primero para empezar.",
            showButton: true,
            actionType: 'create',
            btnLabel: "Crear nuevo registro",
            btnIcon: <Plus size={16} />,
            btnVariant: "solid",
            btnColor: "primary"
        };
    }
}