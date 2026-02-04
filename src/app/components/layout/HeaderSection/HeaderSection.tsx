
"use client";
import { Avatar, Button, ButtonTheme, Divider, SwitchTheme } from 'lambda-ui-components';
import { LogoFluxCoreLarge } from '../../logos/LogoFluxCoreLarge';
import styles from './HeaderSection.module.scss';
import { useAuth } from '@/hooks/useAuth';
import { Menu } from 'lucide-react';
import { useMainMenuStore } from '@/pp/store/mainmenu.store';

export function HeaderSection({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    const { open, setOpen } = useMainMenuStore();

    const getRoleLabel = (role: string) => {
        switch (role) {
            case 'SUPER_ADMIN':
                return 'Super Admin';
            case 'ADMIN':
                return 'Administrador';
            case 'MANAGER':
                return 'Gerente';
            case 'CASHIER':
                return 'Cajero';
            case 'PURCHASING_AGENT':
                return 'Comprador';
            case 'STOCK_CLERK':
                return 'Almacenista';
            default:
                return role;
        }
    };

    return (
        <header className={styles.header_section}>
            <div className={styles.logo_container}>
                <div>
                    <Button icon={<Menu />} variant='text' size='small' onClick={() => setOpen(!open)} />
                </div>
                <LogoFluxCoreLarge width={30} height={30} />
            </div>
            <Divider orientation="vertical" />
            <div className={styles.user_container}>
                {children}
                <div>
                    <div className={styles.theme}>
                        <SwitchTheme showLabel size='small' />
                    </div>
                    <Divider orientation="vertical" />
                    <div>
                        <span>{user?.name}</span>
                        <span>{getRoleLabel(user?.role!)}</span>
                    </div>
                    <Avatar
                        name={user?.name! || ""}
                        size="small"
                    />
                </div>
            </div>
        </header>
    );
}
