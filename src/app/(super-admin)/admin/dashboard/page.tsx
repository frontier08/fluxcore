
import { Divider } from "lambda-ui-components";
import styles from "./Adminpage.module.scss";
import { KipCard } from "@/app/components/ui/KipCard/KipCard";
import { AreaChart } from "@/app/components/ui/AreaChart/AreaChart";
import { DonutChart } from "@/app/components/ui/DonutChart/DonutChart";
import { RegisteredTenants, TableData } from "./components/RegisteredTenants";
import { UsageTenants } from "./components/UsageTenants";
import { SystemStatus } from "./components/SystemStatus/SystemStatus";
import { ChartGroup } from "@/typesComponents/chart";
import { ContainerSection } from "@/pp/components/layout/ContainerSection/ContainerSection";

export default function AdminPage() {
    return (
        <ContainerSection title="Panel de control global" description="Vista general del rendimiento del ecosistema FluxCore">
            <div className={styles.kips}>
                <KipCard type="revenue" value={4365.56} percentage={0.35} trend="up" />
                <KipCard type="tenants" value={37} percentage={0.12} trend="down" />
                <KipCard type="subscriptions" value={43} percentage={0.05} trend="up" />
                <KipCard type="churnRate" value={0.05} percentage={0.26} trend="down" />
                <KipCard type="apiCalls" value={1365} />
            </div>
            <Divider spacing={10} />
            <div className={`${styles.wrapper} `}>
                <div className={styles.charts}>
                    <div className={styles.charts_area}>
                        <AreaChart
                            data={area}
                            type="currency"
                            title="Tendencia de crecimiento MRR"
                            description="Rendimiento en los últimos 12 meses"
                            curveType="linear"
                        />
                    </div>
                    <div className={styles.charts_donut}>
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
                <div className={styles.tables}>
                    <RegisteredTenants data={tableData} />
                    <UsageTenants data={usageData} />
                    <SystemStatus {...systemStatus} />
                </div>
            </div>
        </ContainerSection>
    );
}

const area: ChartGroup = {
    data: [
        { name: 'Ene', "2025": 12450, label: "Enero" },
        { name: 'Feb', "2025": 13800, label: "Febrero" },
        { name: 'Mar', "2025": 11200, label: "Marzo" },
        { name: 'Abr', "2025": 15600, label: "Abril" },
        { name: 'May', "2025": 18900, label: "Mayo" },
        { name: 'Jun', "2025": 17400, label: "Junio" },
        { name: 'Jul', "2025": 22300, label: "Julio" },
        { name: 'Ago', "2025": 20100, label: "Agosto" },
        { name: 'Sep', "2025": 18500, label: "Septiembre" },
        { name: 'Oct', "2025": 21200, label: "Octubre" },
        { name: 'Nov', "2025": 28400, label: "Noviembre" },
        { name: 'Dic', "2025": 35900, label: "Diciembre" },
    ],
    groups: ["2025"]
};

const donutData = [
    { name: 'Free', value: 40 },
    { name: 'Basic', value: 30 },
    { name: 'Pro', value: 5 },
    { name: 'Enterprise', value: 15 },
];

const tableData: TableData[] = [
    {
        id: 1,
        tenant: "Abarrotes La Esperanza",
        plan: "Pro",
        status: "Active",
        revenue: 29.90
    },
    {
        id: 2,
        tenant: "Ferretería El Martillo",
        plan: "Enterprise",
        status: "Active",
        revenue: 149.50
    },
    {
        id: 3,
        tenant: "Boutique Elegance",
        plan: "Pro",
        status: "Inactive",
        revenue: 0.00
    },
    {
        id: 4,
        tenant: "Cafetería Central",
        plan: "Gratis",
        status: "Active",
        revenue: 0.00
    },
    {
        id: 5,
        tenant: "Farmacia San Juan",
        plan: "Enterprise",
        status: "Trial",
        revenue: 0.00
    },
    {
        id: 6,
        tenant: "Llantera 'El Rayo'", // Corregido: comillas simples dentro
        plan: "Pro",
        status: "Past Due",
        revenue: 29.90
    },
    {
        id: 7,
        tenant: "Gimnasio 'Iron Gym'", // Corregido
        plan: "Enterprise",
        status: "Active",
        revenue: 149.50
    },
    {
        id: 8,
        tenant: "Veterinaria 'Mi Mascota'", // Corregido
        plan: "Pro",
        status: "Canceled",
        revenue: 0.00
    },
    {
        id: 9,
        tenant: "Restaurante 'Sabor Real'", // Corregido
        plan: "Enterprise",
        status: "Active",
        revenue: 149.50
    },
    {
        id: 10,
        tenant: "Tienda de Mascotas 'Puppy'", // Corregido
        plan: "Gratis",
        status: "Inactive",
        revenue: 0.00
    }
];

const usageData = [
    {
        id: 1,
        title: "Farmacia San Juan",
        usage: 5046586572,
        limit: 5368709120 // 5 GB (Plan Pro - 94%)
    },
    {
        id: 2,
        title: "Supermercado El Trébol",
        usage: 13421772800,
        limit: 21474836480 // 20 GB (Plan Enterprise - 62%)
    },
    {
        id: 3,
        title: "Ferretería El Martillo",
        usage: 5368709120,
        limit: 5368709120 // 5 GB (Plan Pro - 100% Agotado)
    },
    {
        id: 4,
        title: "Boutique Elegance",
        usage: 2254857830,
        limit: 5368709120 // 5 GB (Plan Pro - 42%)
    },
    {
        id: 5,
        title: "Cafetería Central",
        usage: 445644800,
        limit: 524288000 // 500 MB (Plan Gratis - 85%)
    },
    {
        id: 6,
        title: "Abarrotes La Esperanza",
        usage: 2576980377,
        limit: 5368709120 // 5 GB (Plan Pro)
    },
    {
        id: 7,
        title: "Carnicería Selecta",
        usage: 1717986918,
        limit: 5368709120 // 5 GB (Plan Pro)
    },
    {
        id: 8,
        title: "Panadería Delicia",
        usage: 498073600,
        limit: 524288000 // 500 MB (Plan Gratis - 95%)
    },
    {
        id: 9,
        title: "Minimarket Express",
        usage: 1181116006,
        limit: 5368709120 // 5 GB (Plan Pro)
    },
    {
        id: 10,
        title: "Refaccionaria García",
        usage: 644245094,
        limit: 5368709120 // 5 GB (Plan Pro)
    }
];

const systemStatus = {
    uptime: 98,
    latencyAverage: 120,
    latencyMax: 200,
    latencyMin: 80
};
