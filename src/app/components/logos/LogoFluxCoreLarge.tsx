
import Link from "next/link";
import { LogoFluxCore } from "./LogoFluxCore";
import styles from "./logos.module.scss";


export function LogoFluxCoreLarge({ width, height }: { width: number; height: number }) {
    return (
        <Link href="/" className={styles["logo-fluxcore-large"]}>
            <LogoFluxCore width={width} height={height} />
            <h1 style={{ fontSize: `${width / 2}px` }}>FluxCore</h1>
        </Link>
    );
} 