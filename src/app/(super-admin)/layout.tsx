import { NavigationMenuData } from "lambda-ui-components";
import { HeaderSection } from "../components/layout/HeaderSection/HeaderSection";
import { Sidebar } from "../components/layout/Sidebar/Sidebar";
import styles from "./admin/superadmin.module.scss";
import { LayoutDashboard, Building2, CreditCard, Settings, Layers, TerminalSquare } from "lucide-react";


export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <HeaderSection>
                <p>Super Admin</p>
            </HeaderSection>
            <div className={styles.content}>
                <Sidebar
                    menuData={menuData}
                    currentPath={"/admin/dashboard"}
                    title="Panel de administración"
                />
                <section className={styles["content_section"]}>
                    {children}
                </section>
            </div>
        </main>
    );
}


const menuData: NavigationMenuData[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: <LayoutDashboard size={25} absoluteStrokeWidth />
    },
    {
        id: "tenants",
        label: "Tenants",
        path: "/admin/tenants",
        icon: <Building2 size={25} absoluteStrokeWidth />
    },
    {
        id: "plans",
        label: "Planes",
        path: "/admin/plans",
        icon: < Layers size={25} absoluteStrokeWidth />
    },
    {
        id: "subscriptions",
        label: "Suscripciones",
        path: "/admin/subscriptions",
        icon: <CreditCard size={25} absoluteStrokeWidth />
    },
    {
        id: "system-logs",
        label: "Logs del sistema",
        path: "/admin/system-logs",
        icon: <TerminalSquare size={25} absoluteStrokeWidth />
    },
    {
        id: "settings",
        label: "Configuración",
        path: "/admin/settings",
        icon: <Settings size={25} absoluteStrokeWidth />
    }
];