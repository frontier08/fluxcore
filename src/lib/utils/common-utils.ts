
/**
 * Formatea un valor monetario en MXN
 * @param value valor monetario
 * @returns valor monetario formateado
 */
export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

/**
 * Convierte un valor decimal a porcentaje
 * @param value valor decimal
 * @returns porcentaje
 */
export const formatPercentage = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(value);
};

/**
 * Convierte un valor decimal a porcentaje
 * @param value valor decimal
 * @returns porcentaje
 */
export const toPorcentage = (value: number) => {
    return `${(value * 100).toFixed(0)}%`
}

/**
 * Convierte bytes a un tamaño legible (MB, GB, TB, etc.)
 * @param bytes cantidad de bytes
 * @returns tamaño legible
 */
export const bytesToSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}
