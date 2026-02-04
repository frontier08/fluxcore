"use client";
import { Pie, PieChart, PieSectorDataItem, ResponsiveContainer, Sector } from 'recharts';
import styles from './DonutChart.module.scss'
import { DashboardCard } from '../DashboardCard/DashboardCard';
import { COLORS } from '@/utils/constants';
import { ChartData } from '@/typesComponents/chart';

interface DonutChartProps {
    cx: string,
    cy: string,
    data: ChartData[],
    dataKey: string,
    fill: string,
    innerRadius: number,
    outerRadius: number,
    title: string,
    description: string,
}

export const DonutChart = (props: DonutChartProps) => {

    const renderActiveShape = (props: PieSectorDataItem & { isActive: boolean, index: number }) => {
        const RADIAN = Math.PI / 180;
        const {
            cx = 0,
            cy = 0,
            midAngle = 0,
            innerRadius,
            outerRadius = 0,
            startAngle,
            endAngle,
            fill,
            payload,
            percent = 0,
            value,
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return props.isActive ? (
            <g  >
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"var(--foreground-title-color)"}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={COLORS[props.index % COLORS.length]}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={COLORS[props.index % COLORS.length]}
                />
                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={COLORS[props.index % COLORS.length]}
                    fill="none" />
                <circle
                    cx={ex}
                    cy={ey}
                    r={2}
                    fill={COLORS[props.index % COLORS.length]}
                    stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    className={styles.text}
                    fill="var(--foreground-title-color)">{`Cantidad: ${value}`}</text>
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="var(--foreground-secondary-color)">
                    {`(${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        ) : (
            <g>
                <circle
                    cx={ex}
                    cy={ey}
                    r={2}
                    fill={fill}
                    stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="var(--foreground-secondary-color)">
                    {`(${(percent * 100).toFixed(2)}%)`}
                </text>
                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none" />
                <Sector {...props} fill={`${COLORS[props.index % COLORS.length]}`} style={{ opacity: 0.5, stroke: COLORS[props.index % COLORS.length] }} />
            </g>
        );
    };

    return (
        <DashboardCard title={props.title} description={props.description} >
            <ResponsiveContainer className={styles.container}>
                <div className={styles.legend}>
                    {props.data.map((item, index) => (
                        <div key={index} className={styles.legend_item}>
                            <div className={styles.legend_color} style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                            <span className={styles.legend_text}>{item.name || ""}</span>
                        </div>
                    ))}
                </div>
                <PieChart>
                    <Pie {...props} dataKey="value" shape={renderActiveShape} />
                </PieChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
}

