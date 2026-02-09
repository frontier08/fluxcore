import { GetPlansParams, Plan } from '@/typesAPI/plan.types';
import styles from './Planspage.module.scss'
import { ContainerSection } from '@/app/components/layout/ContainerSection/ContainerSection';
import { PagedResponse } from '@/typesAPI/common.types';
import { Suspense } from 'react';
import { PlansView } from './components/TenantsView/PlansView';

const getPlans = async (params: GetPlansParams) => {
    // const response = await planService.getAllPlans(params);

    return undefined;
}


export default async function PlansPage({ searchParams }: { searchParams: GetPlansParams }) {

    const params = await searchParams;
    const plans: PagedResponse<Plan> | undefined = await getPlans({ ...params });
    return (
        <ContainerSection title="Distribución de Membresías" description="Definición de costos, límites de almacenamiento y características de los planes actuales.">
            <div className={styles.plans}>
                <Suspense fallback={<div>Cargando...</div>}>
                    <PlansView
                        plans={plans!.data || []}
                        pagination={plans!.pagination!}
                        success={plans!.success}
                    />
                </Suspense>
            </div>
        </ContainerSection>
    );
}
