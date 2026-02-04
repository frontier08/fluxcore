"use client";
import { Divider, NavigationMenuData } from 'lambda-ui-components';
import styles from './Sidebar.module.scss'
import Link from 'next/link';
import { CloseSession } from './CloseSession';
import { UserStar } from 'lucide-react';
import { Icon } from '../../Icon';
import { useMainMenuStore } from '@/pp/store/mainmenu.store';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    menuData: NavigationMenuData[];
    title: string;
}

export const Sidebar = ({ menuData, title }: SidebarProps) => {
    const currentPath = usePathname();
    const { open } = useMainMenuStore();
    return (
        <div className={`${styles.sidebar} ${open ? styles.sidebar_open : ""}`}>
            <div>
                <div>
                    <Icon icon={UserStar} size={25} />
                    <h3> {title}</h3>
                </div>
                <Divider />
                {
                    menuData.map((item) => (
                        <Link
                            className={`${styles.link} ${item.path === currentPath ? styles.active : ""}`}
                            key={item.id}
                            href={item.path || ""}
                        > {item.icon} <span>{item.label}</span></Link>
                    ))
                }
            </div>
            <CloseSession />
        </div>
    );
}
