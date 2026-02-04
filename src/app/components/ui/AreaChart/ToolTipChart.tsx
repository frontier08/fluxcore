import { TooltipContentProps } from "recharts";
import styles from "./AreaChart.module.scss";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";
import { NameType } from "recharts/types/component/DefaultTooltipContent";
import { formatPercentage, formatCurrency } from "../../../../lib/utils/common-utils";

interface ToolTipChartProps<TValue extends ValueType, TName extends NameType>
    extends TooltipContentProps<TValue, TName> {
    type: "porcentage" | "number" | "currency" | "decimal";
}

export const ToolTipChart = <TValue extends ValueType, TName extends NameType>(
    props: ToolTipChartProps<TValue, TName>
) => {
    const { active, payload, type } = props;
    if (active && payload && payload.length) {
        const data = payload[0] && payload[0].payload;
        const color = props.payload;
        const total = payload.reduce((acc, item) => acc + item.value, 0);

        return (
            <div className={styles.tooltip}>
                <header className={styles.tooltip_header}>
                    <h1>{data.label}</h1>
                </header>
                <div className={styles.tooltip_values}>
                    {payload.map((item, index) => (
                        <span key={index} className={styles.tooltip_value}>
                            <span className={styles.tooltip_tag} style={{ backgroundColor: color[index].stroke || color[index].fill }}></span>
                            <span>{item.name}: </span>
                            <span>
                                {type === "porcentage" && formatPercentage(item.value)}
                                {type === "currency" && formatCurrency(item.value)}
                                {type === "number" && item.value}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};