import { HeaderSection } from "../components/layout/HeaderSection";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <HeaderSection />
            {children}
        </main>
    );
}