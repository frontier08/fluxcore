"use client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "lambda-ui-components";
import styles from "../superadmin.module.scss";

export default function AdminPage() {
    const { logout, isLoading, user } = useAuth();
    return (
        <div className={styles.container}>
            <h1>Admin</h1>
            <div>
                <p>Usuario: {user?.username}</p>
                <p>Nombre: {user?.name}</p>
                <p>Rol: {user?.role}</p>
                <p>ID: {user?.id}</p>
                <p>Email: {user?.email}</p>
            </div>

            <Button
                color="primary"
                size="medium"
                block
                loading={isLoading}
                disabled={isLoading}
                loadingText="Cerrando sesión..."
                label="Cerrar sesión"
                onClick={() => logout()}
            />
        </div>
    );
}