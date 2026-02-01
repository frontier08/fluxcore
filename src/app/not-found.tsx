"use client";

import styles from "./not-found.module.scss";
import { Button, Flex } from "lambda-ui-components";
import { useRouter } from "next/navigation";
import { getHomeRouteForRole } from "../lib/utils/auth-utils";
import { LogoFluxCore } from "./components/logos/LogoFluxCore";
import { useAuth } from "@/hooks/useAuth";
import { Icon } from "./components/Icon";
import { CloudOff } from "lucide-react";

export default function NotFound() {
    const { user } = useAuth();
    const router = useRouter();
    const homeRoute = getHomeRouteForRole(user?.role || 'CASHIER');

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <LogoFluxCore width={100} height={100} />
                <Flex gap={10} direction="column" align="center">
                    <h1>404</h1>
                    <Icon icon={CloudOff} size={50} />
                </Flex>
                <h2>Página no encontrada</h2>
                <p>Parece que la ruta que buscas no existe o fue movida.
                    Verifica la URL o usa los botones de abajo para volver a un lugar seguro.
                </p>
                <Flex gap={10}>
                    <Button
                        color="primary"
                        size="medium"
                        block
                        onClick={() => router.push(homeRoute)}
                    >
                        Volver a {user?.role === 'CASHIER' ? 'Ventas' : 'mi Panel'}
                    </Button>
                    <Button
                        color="primary"
                        size="medium"
                        block
                        variant="outline"
                        onClick={() => router.push('/')}
                    >
                        Ir a inicio
                    </Button>
                </Flex>
            </div>
        </div>
    );
}
