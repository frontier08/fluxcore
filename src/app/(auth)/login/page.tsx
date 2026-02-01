"use client";
import { Button, Input, Divider, Alert } from "lambda-ui-components";
import styles from "../auth.module.scss";
import { RectangleEllipsis, User2, UserCircle2 } from "lucide-react";
import { Icon } from "@/app/components/Icon";
import { useAuth } from "@/hooks/useAuth";
import { LoginCredentials } from "@/typesAPI/auth.types";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth.schema";

export default function LoginPage() {
    const { login, isLoading, error } = useAuth();
    const { handleSubmit, control, setError, formState: { errors } } = useForm<LoginCredentials>({ resolver: zodResolver(loginSchema) });


    const onSubmit = async (data: LoginCredentials) => {
        console.log(data);
        console.log(errors);
        console.log(error);


        await login(data);
    };

    console.log(errors);


    return (
        <div className={styles["login_page"]}>
            <div>
                <Icon icon={UserCircle2} size={80} />
                <h1>Bienvenido</h1>
                <p>Por favor, ingresa tus credenciales para iniciar sesión</p>
                {(error && !isLoading) && <Alert
                    title="Autenticación fallida"
                    message={error!}
                    variant="solid"
                    color="danger"
                    size="small"
                />}
                <form className={styles["login_form"]} onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder="Juan Pérez"
                                label="Usuario"
                                prefix={<Icon icon={User2} />}
                                invalid={!!errors.username}
                                errorMessage={errors.username?.message}
                                required
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field }) => (
                            <Input
                                {...field}
                                placeholder="Introduce tu contraseña"
                                type="password"
                                prefix={<Icon icon={RectangleEllipsis} />}
                                label="Contraseña"
                                invalid={!!errors.password}
                                errorMessage={errors.password?.message}
                                required
                            />
                        )}
                    />
                    <Divider spacing={20} />
                    <Button
                        color="primary"
                        size="medium"
                        block
                        loading={isLoading}
                        disabled={isLoading}
                        loadingText="Iniciando sesión..."
                        label="Iniciar sesión"
                    />
                </form>
            </div>
        </div>
    );
}