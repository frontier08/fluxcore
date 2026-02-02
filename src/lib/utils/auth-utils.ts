export const getHomeRouteForRole = (role: string): string => {
    const routes: Record<string, string> = {
        'SUPER_ADMIN': '/admin/dashboard',
        'ADMIN': '/dashboard',
        'MANAGER': '/dashboard',
        'CASHIER': '/ventas/pos',
        'STOCK_CLERK': '/inventario'
    };
    return routes[role];
};