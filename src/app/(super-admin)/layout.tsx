import { NavigationMenuData } from "lambda-ui-components";
import { HeaderSection } from "../components/layout/HeaderSection/HeaderSection";
import { Sidebar } from "../components/layout/Sidebar/Sidebar";
import styles from "./admin/superadmin.module.scss";
import { LayoutDashboard, Building2, CreditCard, Terminal, Settings, Layers } from "lucide-react";
import { Icon } from "../components/Icon";

const menuData: NavigationMenuData[] = [
    {
        id: "dashboard",
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: <Icon icon={LayoutDashboard} />
    },
    {
        id: "tenants",
        label: "Tenants",
        path: "/admin/tenants",
        icon: <Icon icon={Building2} />
    },
    {
        id: "plans",
        label: "Planes",
        path: "/admin/plans",
        icon: <Icon icon={Layers} />
    },
    {
        id: "subscriptions",
        label: "Suscripciones",
        path: "/admin/subscriptions",
        icon: <CreditCard />
    },
    {
        id: "system-logs",
        label: "Logs del sistema",
        path: "/admin/system-logs",
        icon: <Terminal />
    },
    {
        id: "settings",
        label: "Configuración",
        path: "/admin/settings",
        icon: <Settings />
    }
];

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            <HeaderSection>
                <p>Super Admin</p>
            </HeaderSection>
            <div className={styles.content}>
                <Sidebar menuData={menuData} currentPath={"/admin/dashboard"} />
                {children}
            </div>
        </main>
    );
}