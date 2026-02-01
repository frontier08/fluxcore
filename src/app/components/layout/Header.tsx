import { LogoFluxCoreLarge } from "../logos/LogoFluxCoreLarge";
import styles from "./layout.module.scss";
import Link from "next/link";

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <LogoFluxCoreLarge width={60} height={60} />
            </Link>
        </header>
    );
}