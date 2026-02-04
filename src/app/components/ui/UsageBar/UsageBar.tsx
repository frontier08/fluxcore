
import { Progress } from 'lambda-ui-components';
import styles from './UsageBar.module.scss'
import { bytesToSize } from '../../../../lib/utils/common-utils';

interface UsageBarProps {
    id: number;
    title: string;
    usage: number;
    limit: number;
}

export const UsageBar = ({ id, title, usage, limit }: UsageBarProps) => {
    const value = (usage / limit) * 100;

    const getColor = () => {
        if (value < 50) return "success";
        if (value < 80) return "warning";
        return "danger";
    }

    return (
        <div className={styles.usagebar}>
            <div className={styles.usagebar_header}>
                <span>{title}</span>
                <span>{bytesToSize(usage)}/{bytesToSize(limit)}</span>
            </div>
            <Progress
                value={value}
                showValue
                size="small"
                color={getColor()}
            />
        </div>
    );
}
