import { useEffect, useRef, useCallback } from "react";



/**
 * Hook que permite envolver cualquier función para que espere antes de ejecutarse
 * @param callback Función a ejecutar
 * @param delay Tiempo en milisegundos a esperar antes de ejecutar la función
 * @returns Función envuelta
 */
export function useDebouncedCallback<T extends (...args: any[]) => void>(
    callback: T,
    delay: number
) {
    // Usamos useRef para guardar el ID del temporizador entre renderizados
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Limpiamos el timer si el componente se desmonta
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return useCallback((...args: Parameters<T>) => {
        // 1. Si ya hay un timer pendiente, lo cancelamos
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // 2. Creamos uno nuevo
        timeoutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}