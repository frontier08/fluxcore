
import { LogoFluxCoreLarge } from '../logos/LogoFluxCoreLarge';
import styles from './layout.module.scss';

export function HeaderSection() {

    return (
        <header className={styles.header_section}>
            <LogoFluxCoreLarge width={40} height={40} />
        </header>
    );
}
