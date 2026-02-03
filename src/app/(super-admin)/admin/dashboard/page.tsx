
import { Divider } from "lambda-ui-components";
import styles from "./Adminpage.module.scss";
import { KipCard } from "@/app/components/ui/KipCard/KipCard";
import { AreaChart } from "@/app/components/ui/AreaChart/AreaChart";
import { DonutChart } from "@/app/components/ui/DonutChart/DonutChart";

export default function AdminPage() {
    return (
        <div className={styles.container}>
            <header className={styles.container_header}>
                <h1>Panel de control global</h1>
                <span>Vista general del rendimiento del ecosistema FluxCore </span>
            </header>
            <Divider spacing={20} />
            <div className={styles.container_kips}>
                <KipCard type="revenue" value={4365.56} percentage={0.35} trend="up" />
                <KipCard type="tenants" value={37} percentage={0.12} trend="down" />
                <KipCard type="subscriptions" value={43} percentage={0.05} trend="up" />
                <KipCard type="churnRate" value={0.05} percentage={0.26} trend="down" />
                <KipCard type="apiCalls" value={1365} />
            </div>
            <Divider spacing={20} />
            <div className={styles.container_wrapper}>
                <div className={styles.container_charts}>
                    <div className={styles.container_charts_area}>
                        <AreaChart
                            area={area}
                            type="currency"
                            title="Tendencia de crecimiento MRR"
                            description="Rendimiento en los últimos 12 meses"
                            curveType="linear"
                        />
                    </div>
                    <div className={styles.container_charts_donut}>
                        <DonutChart
                            cx="50%"
                            cy="47%"
                            data={donutData}
                            dataKey="value"
                            fill="var(--surface-d)"
                            innerRadius={50}
                            outerRadius={70}
                            title="Distribución de Suscripciones"
                            description="Desglose de tenants activos por nivel de servicio"
                        />
                    </div>
                </div>
                <div className={styles.container_tables}>

                </div>
            </div>
        </div>
    );
}

const area: AreaChart = {
    data: [
        { name: 'Ene', "2025": 35, label: "Enero" },
        { name: 'Feb', "2025": 45, label: "Febrero" },
        { name: 'Mar', "2025": 23, label: "Marzo" },
        { name: 'Abr', "2025": 67, label: "Abril" },
        { name: 'May', "2025": 89, label: "Mayo" },
        { name: 'Jun', "2025": 54, label: "Junio" },
        { name: 'Jul', "2025": 92, label: "Julio" },
        { name: 'Ago', "2025": 78, label: "Agosto" },
        { name: 'Sep', "2025": 33, label: "Septiembre" },
        { name: 'Oct', "2025": 61, label: "Octubre" },
        { name: 'Nov', "2025": 49, label: "Noviembre" },
        { name: 'Dic', "2025": 82, label: "Diciembre" },
    ],
    groups: ["2025", "2026"]
};

const donutData = [
    { name: 'Free', value: 40 },
    { name: 'Basic', value: 30 },
    { name: 'Pro', value: 5 },
    { name: 'Enterprise', value: 15 },
];