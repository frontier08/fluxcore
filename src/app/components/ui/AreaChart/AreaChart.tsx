"use client"
import styles from './AreaChart.module.scss'
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ToolTipChart } from './ToolTipChart';
import { formatCurrency, formatPercentage } from '@/utils/common-utils';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { COLORS } from '@/utils/constants';
import { ChartGroup, ChartNumberType } from '@/typesComponents/chart';
import { CurveType } from 'recharts/types/shape/Curve';


export interface AreaChartProps {
    data: ChartGroup;
    type: ChartNumberType;
    title: string;
    description: string;
    curveType?: CurveType
}


export const AreaChart = ({ data, type, title, description, curveType }: AreaChartProps) => {


    return (
        <DashboardCard title={title} description={description}  >
            <ResponsiveContainer debounce={10}>
                <RechartsAreaChart
                    className={styles.areachart}
                    responsive
                    data={data.data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke='var(--border-color)'
                    />
                    <XAxis
                        dataKey="name"
                        stroke='var(--surface-e)'
                        tick={{ fill: 'var(--foreground-secondary-color)', dy: 5 }}
                    />
                    <YAxis
                        width="auto"
                        tickFormatter={(value) => convertValue(value, type)}
                        stroke='var(--surface-e)'
                        tick={{ fill: 'var(--foreground-secondary-color)', dx: -5 }}
                    />
                    <Tooltip content={(props) => (
                        <ToolTipChart {...props} type={type} active animationDuration={250} />
                    )} />
                    <Legend />
                    {data.groups.map((group, index) => (
                        <Area
                            key={index}
                            animationEasing='ease-in-out'
                            animationDuration={200}
                            isAnimationActive={false}
                            type={curveType}
                            dataKey={group}
                            stroke={COLORS[index]}
                            strokeWidth={2}
                            fill={COLORS[index]}
                            fillOpacity={0.3} />
                    ))}
                </RechartsAreaChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
}



const convertValue = (value: number, type: "porcentage" | "number" | "currency" | "decimal") => {
    switch (type) {
        case "porcentage":
            return formatPercentage(value).toString();
        case "currency":
            return formatCurrency(value).toString();
        case "number":
            return value.toString();
        case "decimal":
            return value.toString();
    }
}