import { DashboardCard } from "@/pp/components/ui/DashboardCard/DashboardCard";
import { Divider, Link, Progress, Tooltip } from "lambda-ui-components";
import styles from "./SystemStatus.module.scss";
import { BarChart } from "@/pp/components/ui/BarChart/BarChart";
import { ChartGroup } from "@/typesComponents/chart";
import { ExternalLink } from "lucide-react";

interface SystemStatusProps {
    uptime: number;
    latencyAverage: number;
    latencyMax: number;
    latencyMin: number;
}

export const SystemStatus = ({ uptime, latencyAverage, latencyMax, latencyMin }: SystemStatusProps) => {

    const latecyColor = (latency: number) => {
        if (latency < 100) {
            return "var(--success-base-color)";
        } else if (latency < 200) {
            return "var(--warning-base-color)";
        } else {
            return "var(--danger-base-color)";
        }
    }
    return (
        <DashboardCard
            title="Estado del sistema"
            description="Salud de la infraestructura"
            headerActions={
                <Tooltip
                    content="Ver todas las analíticas" offset={10}
                    color="info"
                >
                    <Link
                        href="/admin/system-logs"
                        icon={<ExternalLink absoluteStrokeWidth />}
                        size="small"
                        color="info"
                        type="button"
                        variant="subtle" />
                </Tooltip>
            }
        >
            <div className={styles.container}>
                <div className={styles.uptime}>
                    <h3>Estado del servidor</h3>
                    <Progress
                        value={uptime}
                        variant="circle"
                        size="large"
                        showValue
                        label="Uptime"
                        color="success"
                    />
                </div>
                <BarChart
                    data={errorData}
                    title="Tasa de errores 4xx y 5xx"
                    description="Tasa de errores por hora"
                    type="number"
                    barSize={15}
                    showTooltip
                    colors={["var(--lambda-color-yellow-600)", "var(--danger-base-color)"]}
                    width={"100%"}
                />
            </div>
            <Divider spacing={1} />
            <div className={styles.latency}>
                <h3>Latencia</h3>
                <div className={styles.latency_container}>
                    <div className={styles.latency_item}>
                        <span>Máxima: </span>
                        <span style={{ color: latecyColor(latencyMax) }}>{latencyMax}ms</span>
                    </div>
                    <div className={styles.latency_item}>
                        <span>Promedio: </span>
                        <span style={{ color: latecyColor(latencyAverage) }}>{latencyAverage}ms</span>
                    </div>
                    <div className={styles.latency_item}>
                        <span>Mínima: </span>
                        <span style={{ color: latecyColor(latencyMin) }}>{latencyMin}ms</span>
                    </div>
                </div>
            </div>
        </DashboardCard>
    );
}

const errorData: ChartGroup = {
    data: [
        { name: '08:00', "400": 12, "500": 2, label: "08:00 AM" },
        { name: '10:00', "400": 45, "500": 5, label: "10:00 AM" },
        { name: '12:00', "400": 118, "500": 12, label: "12:00 PM" },
        { name: '14:00', "400": 84, "500": 35, label: "02:00 PM" },
        { name: '16:00', "400": 40, "500": 8, label: "04:00 PM" },
        { name: '18:00', "400": 15, "500": 2, label: "06:00 PM" },
        { name: '20:00', "400": 5, "500": 0, label: "08:00 PM" },
    ],
    groups: ["400", "500"]
};