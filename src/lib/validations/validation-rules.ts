export const ValidationRules = {
    // Usuario
    USERNAME: {
        MIN_LENGTH: 3,
        MAX_LENGTH: 50,
        PATTERN: /^[a-zA-Z0-9_-]+$/,
        MESSAGE: 'Usuario debe tener 3-50 caracteres alfanuméricos',
    },

    // Email
    EMAIL: {
        PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        MAX_LENGTH: 100,
        MESSAGE: 'Email inválido',
    },

    // Password
    PASSWORD: {
        MIN_LENGTH: 8,
        MAX_LENGTH: 100,
        REQUIRE_UPPERCASE: true,
        REQUIRE_LOWERCASE: true,
        REQUIRE_DIGIT: true,
        REQUIRE_SPECIAL: true,
        MESSAGE: 'La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas, números y símbolos',
    },

    // Producto
    PRODUCT: {
        NAME: {
            MIN_LENGTH: 3,
            MAX_LENGTH: 200,
        },
        CODE: {
            MIN_LENGTH: 3,
            MAX_LENGTH: 50,
            PATTERN: /^[A-Z0-9-]+$/,
        },
        PRICE: {
            MIN: 0.01,
            MAX: 999999.99,
            DECIMALS: 2,
        },
        STOCK: {
            MIN: 0,
            MAX: 999999,
        },
    },

    // Cliente
    CUSTOMER: {
        NAME: {
            MIN_LENGTH: 2,
            MAX_LENGTH: 100,
        },
        PHONE: {
            PATTERN: /^[0-9]{10}$/,
            MESSAGE: 'Teléfono debe tener 10 dígitos',
        },
        RFC: {
            PATTERN: /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/,
            MESSAGE: 'RFC inválido',
        },
    },
} as const;