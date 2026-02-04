"use client";
import { LambdaConfigProvider, NotificationProvider, ThemeProvider } from "lambda-ui-components";
import SessionProvider from "./SessionProvider";
export function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <LambdaConfigProvider lang="en" >
            <ThemeProvider
                defaultTheme="slate"
                lightTheme="ocean"
                darkTheme="slate"
                disableTransitionOnChange
            >
                <SessionProvider>
                    <NotificationProvider duration={5000} maxNotifications={5} placement="top-right">
                        {children}
                    </NotificationProvider>
                </SessionProvider>
            </ThemeProvider>
        </LambdaConfigProvider>
    );
}
