import { formatCurrency, formatPercentage } from '../../../../lib/utils/common-utils';
import { Icon } from '../../Icon';
import styles from './KipCard.module.scss'
import { DollarSign, Building2, CreditCard, Zap, AlertTriangle, UserPlus, User, Activity, TrendingDown, ShoppingBag, TrendingUp } from 'lucide-react';

interface KipCardProps {
    type: keyof typeof typeKipCard;
    value: number;
    percentage?: number;
    trend?: "up" | "down" | "neutral";
}



export const KipCard = ({ type, value, percentage, trend }: KipCardProps) => {
    return (
        <article className={styles.kipcard}>
            <header className={styles.kipcard_header}>
                <div className={styles.kipcard_icon} style={{ '--icon-main-color': typeKipCard[type].color } as React.CSSProperties}>
                    {typeKipCard[type].icon}
                </div>
                <h2>{typeKipCard[type].title}</h2>
            </header>
            <span className={styles.kipcard_value}>{typeKipCard[type].isCurrency ? formatCurrency(value) : value}</span>
            <div className={styles.kipcard_content}>
                {percentage &&
                    <span style={{ '--icon-trend-color': trend === "up" ? "#10b981" : trend === "down" ? "#f43f5e" : "#6b7280" } as React.CSSProperties}>
                        {formatPercentage(percentage!)}
                        {trend === "up" ? <Icon icon={TrendingUp} size={12} strokeWidth={1.5} /> :
                            trend === "down" ? <Icon icon={TrendingDown} size={12} strokeWidth={1.5} /> : null}
                    </span>
                }
                <span>{typeKipCard[type].message}</span>
            </div>
        </article>
    );
}




const typeKipCard = {
    revenue: {
        title: "Ingresos",
        icon: <DollarSign size={25} absoluteStrokeWidth />,
        color: "#10b981",
        message: "vs mes anterior",
        isCurrency: true,
    },
    salesToday: {
        title: "Ventas de hoy",
        icon: <ShoppingBag size={25} absoluteStrokeWidth />,
        color: "#22c55e",
        message: "vs ayer",
        isCurrency: true,
    },

    tenants: {
        title: "Tenants activos",
        icon: <Building2 size={25} absoluteStrokeWidth />,
        color: "#3b82f6",
        message: "vs mes anterior",
        isCurrency: false,
    },
    subscriptions: {
        title: "Total de suscripciones",
        icon: <CreditCard size={25} absoluteStrokeWidth />,
        color: "#6366f1",
        message: "vs mes anterior",
        isCurrency: false,
    },
    newCustomers: {
        title: "Nuevos clientes",
        icon: <UserPlus size={25} absoluteStrokeWidth />,
        color: "#06b6d4",
        message: "vs mes anterior",
        isCurrency: false,
    },
    totalCustomers: {
        title: "Total de clientes",
        icon: <User size={25} absoluteStrokeWidth />,
        color: "#2563eb",
        message: null,
        isCurrency: false,
    },
    apiCalls: {
        title: "Peticiones API",
        icon: <Activity size={25} absoluteStrokeWidth />,
        color: "#8b5cf6",
        message: null,
        isCurrency: false,
    },
    averageTicket: {
        title: "Ticket promedio",
        icon: <Zap size={25} absoluteStrokeWidth />,
        color: "#f59e0b",
        message: "vs semana pasada",
        isCurrency: true,
    },
    churnRate: {
        title: "Tasa de cancelación",
        icon: <TrendingDown size={25} absoluteStrokeWidth />,
        color: "#f43f5e",
        message: null,
        isCurrency: false,
    },
    stockAlerts: {
        title: "Alertas de stock",
        icon: <AlertTriangle size={25} absoluteStrokeWidth />,
        color: "#f97316",
        message: "Productos por agotarse",
        isCurrency: false,
    },
};