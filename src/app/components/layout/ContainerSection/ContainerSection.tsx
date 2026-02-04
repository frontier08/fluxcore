import { Divider } from 'lambda-ui-components';
import styles from './ContainerSection.module.scss'

interface ContainerSectionProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

export const ContainerSection = ({ children, title, description }: ContainerSectionProps) => {
    return (
        <div className={`${styles.container} scrollBar`}>
            <header className={styles.container_header}>
                <h1>{title}</h1>
                <span>{description}</span>
            </header>
            <Divider spacing={10} />
            {children}
        </div>
    );
}
