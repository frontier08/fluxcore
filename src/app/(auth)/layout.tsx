import { Header } from "../components/layout/Header/Header";
import styles from "./auth.module.scss";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles["login_layout"]}>
            <Header />
            {children}
        </section>
    );
}