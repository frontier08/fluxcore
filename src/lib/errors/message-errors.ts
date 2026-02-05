export const ErrorMessages: Record<string, string> = {
    // Auth
    LOGIN_USERNAME_EMPTY: "Ingresa tu nombre de usuario",
    LOGIN_PASSWORD_EMPTY: "La contraseña es requerida",

    // Brand
    BRAND_NAME_EMPTY: "El nombre de la marca es requerido",
    BRAND_NAME_INVALID: "El nombre de la marca no es válido",
    BRAND_NAME_MIN_LENGTH: "El nombre de la marca es demasiado corto",
    BRAND_DESCRIPTION_MAX_LENGTH: "La descripción es demasiado larga",
    BRAND_LOGO_FILE_INVALID: "El archivo del logo no es válido",
    BRAND_LOGO_FILE_SIZE_EXCEEDED: "El archivo del logo excede el tamaño permitido",
    BRAND_UPDATE_EMPTY: "No se detectaron cambios para actualizar",

    // Cash Movement
    CASH_MOVEMENT_CASH_SESSION_ID_EMPTY: "Se requiere una sesión de caja activa",
    CASH_MOVEMENT_CASH_SESSION_ID_NEGATIVE: "Sesión de caja no válida",
    CASH_MOVEMENT_AMOUNT_EMPTY: "Debes ingresar un monto",
    CASH_MOVEMENT_AMOUNT_NEGATIVE: "El monto debe ser una cantidad mayor a cero",
    CASH_MOVEMENT_CONCEPT_EMPTY: "Debes ingresar el concepto del movimiento",
    CASH_MOVEMENT_CONCEPT_MAX_LENGTH: "El concepto es demasiado largo",
    CASH_MOVEMENT_MOVEMENT_TYPE_INVALID: "Tipo de movimiento no reconocido",

    // Cash Session
    CASH_SESSION_OPENING_BALANCE_NULL: "Debes ingresar el balance de apertura",
    CASH_SESSION_OPENING_BALANCE_NEGATIVE: "El balance de apertura no puede ser menor a cero",
    CASH_SESSION_CLOSING_BALANCE_NULL: "El balance de cierre es requerido para finalizar",
    CASH_SESSION_CLOSING_BALANCE_NEGATIVE: "El balance de cierre no puede ser menor a cero",
    CASH_SESSION_NOTES_MAX_LENGTH: "Las notas son demasiado largas",

    // Category
    CATEGORY_NAME_EMPTY: "El nombre de la categoría es requerido",
    CATEGORY_NAME_MIN_LENGTH: "El nombre de la categoría es demasiado corto",
    CATEGORY_NAME_MAX_LENGTH: "El nombre de la categoría es demasiado largo",
    CATEGORY_DESCRIPTION_MAX_LENGTH: "La descripción es demasiado larga",
    CATEGORY_NAME_DESCRIPTION_SAME: "La descripción debe ser diferente al nombre",

    // Customer
    CUSTOMER_FIRSTNAME_INVALID: "El nombre contiene caracteres no permitidos",
    CUSTOMER_FIRST_NAME_EMPTY: "El nombre del cliente es requerido",
    CUSTOMER_FIRST_NAME_MIN_LENGTH: "El nombre es demasiado corto",
    CUSTOMER_LASTNAME_INVALID: "El apellido contiene caracteres no permitidos",
    CUSTOMER_LAST_NAME_EMPTY: "El apellido del cliente es requerido",
    CUSTOMER_LAST_NAME_MIN_LENGTH: "El apellido es demasiado corto",
    CUSTOMER_EMAIL_EMPTY: "El correo electrónico es requerido",
    CUSTOMER_EMAIL_INVALID: "Ingresa un correo electrónico válido",
    CUSTOMER_EMAIL_MAX_LENGTH: "El correo excede el límite de caracteres",
    CUSTOMER_PHONE_NUMBER_EMPTY: "El número de teléfono es requerido",
    CUSTOMER_PHONE_NUMBER_MIN_LENGTH: "El número de teléfono es demasiado corto",
    CUSTOMER_ADDRESS_EMPTY: "La dirección es requerida",
    CUSTOMER_ADDRESS_TOO_LONG: "La dirección es demasiado larga",
    CUSTOMER_ADDRESS_MAX_LENGTH: "La dirección excede el límite permitido",
    CUSTOMER_RFC_INVALID: "El formato del RFC no es válido",
    CUSTOMER_ZIPCODE_LENGTH: "El código postal debe tener exactamente 5 dígitos",
    CUSTOMER_ZIPCODE_INVALID: "El código postal no es válido",
    CUSTOMER_INVALID_GENERIC_USAGE: "No se puede realizar esta operación con el cliente genérico",
    CUSTOMER_UPDATE_EMPTY: "No se detectaron cambios para actualizar",

    // Customer Account
    CUSTOMER_ACCOUNT_CUSTOMER_ID_INVALID: "Cliente no seleccionado o no válido",
    CUSTOMER_ACCOUNT_CREDIT_LIMIT_INVALID: "El límite de crédito debe ser una cantidad válida",
    CUSTOMER_ACCOUNT_IS_CREDIT_ENABLED_INVALID: "Estado de crédito no válido",
    CUSTOMER_ACCOUNT_ID_INVALID: "Cuenta de cliente no reconocida",
    CUSTOMER_ACCOUNT_MOVEMENT_TYPE_INVALID: "Tipo de movimiento de cuenta no válido",
    CUSTOMER_ACCOUNT_AMOUNT_INVALID: "El monto ingresado no es válido",
    CONCEPT_TOO_LONG: "El concepto excede el límite de caracteres",

    // User
    USER_NAME_REQUIRED: "El nombre completo es requerido",
    USER_NAME_TOO_SHORT: "El nombre es demasiado corto",
    USER_USERNAME_REQUIRED: "El nombre de usuario es requerido",
    USER_USERNAME_TOO_SHORT: "El nombre de usuario es demasiado corto",
    USER_EMAIL_INVALID: "Ingresa un correo electrónico válido",
    USER_PASSWORD_REQUIRED: "La contraseña es requerida",
    USER_PASSWORD_TOO_SHORT: "La contraseña debe tener al menos 8 caracteres",
    USER_PASSWORD_INVALID_FORMAT: "La contraseña debe incluir mayúsculas, minúsculas y números",
    USER_ROLE_ID_INVALID: "Debes seleccionar un rol válido para el usuario",
    USER_UPDATE_NO_FIELDS: "No se detectaron cambios para actualizar",

    // Movement (Inventory)
    MOVEMENT_PRODUCT_VARIANT_ID_REQUIRED: "Debes seleccionar un producto",
    MOVEMENT_USER_ID_REQUIRED: "El registro del empleado es requerido",
    MOVEMENT_QUANTITY_CHANGED_REQUIRED: "Debes ingresar la cantidad",
    MOVEMENT_CUSTOMER_ID_REQUIRED: "Selecciona el cliente asociado",
    MOVEMENT_TYPE_REQUIRED: "El tipo de movimiento es obligatorio",
    MOVEMENT_REFERENCE_DOC_REQUIRED: "Ingresa el documento de referencia",
    MOVEMENT_REFERENCE_DOC_MAX_LENGTH: "La referencia es demasiado larga",
    MOVEMENT_REASON_REQUIRED: "Debes indicar la razón del movimiento",
    MOVEMENT_REASON_MIN_LENGTH: "La razón es demasiado corta",
    MOVEMENT_REASON_MAX_LENGTH: "La razón es demasiado larga",

    // Payment
    PAYMENT_METHOD_REQUIRED: "Selecciona un método de pago",
    PAYMENT_METHOD_INVALID: "Método de pago no reconocido",
    PAYMENT_AMOUNT_INVALID: "El monto del pago debe ser una cantidad válida",

    // Product Master
    PRODUCT_MASTER_NAME_REQUIRED: "El nombre del producto es requerido",
    PRODUCT_MASTER_NAME_MIN_LENGTH: "El nombre del producto es demasiado corto",
    PRODUCT_MASTER_DESCRIPTION_REQUIRED: "La descripción del producto es obligatoria",
    PRODUCT_MASTER_DESCRIPTION_MIN_LENGTH: "La descripción es demasiado corta",
    PRODUCT_MASTER_BRAND_ID_REQUIRED: "Debes seleccionar una marca",
    PRODUCT_MASTER_CATEGORY_ID_REQUIRED: "Debes seleccionar una categoría",
    PRODUCT_MASTER_UPDATE_REQUIRED: "No se detectaron cambios para actualizar",

    // Product Variant
    VARIANT_PRODUCT_MASTER_ID_REQUIRED: "El producto principal es requerido",
    VARIANT_BARCODE_REQUIRED: "El código de barras es requerido",
    VARIANT_PRICE_REQUIRED: "Debes asignar un precio",
    VARIANT_MIN_STOCK_REQUIRED: "El stock mínimo es requerido",
    VARIANT_DISCOUNT_INVALID: "El valor del descuento no es válido",
    VARIANT_DISCOUNT_EXCEEDS_PRICE: "El descuento no puede ser mayor al precio del producto",
    VARIANT_IMAGE_FILE_TYPE_NOT_ALLOWED: "Formato de imagen no permitido",
    VARIANT_IMAGE_FILE_SIZE_EXCEEDED: "La imagen excede el tamaño permitido",
    VARIANT_ID_REQUIRED: "Producto no identificado",
    VARIANT_QUANTITY_INVALID: "La cantidad ingresada no es válida",
    VARIANT_UNIT_PRICE_INVALID: "El precio unitario no es válido",

    // Provider
    PROVIDER_COMPANY_NAME_REQUIRED: "El nombre de la empresa es requerido",
    PROVIDER_COMPANY_NAME_TOO_SHORT: "El nombre de la empresa debe tener al menos 3 caracteres",
    PROVIDER_COMPANY_NAME_TOO_LONG: "El nombre de la empresa es demasiado largo",
    PROVIDER_TAX_ID_REQUIRED: "El RFC del proveedor es requerido",
    PROVIDER_TAX_ID_TOO_SHORT: "El RFC debe tener al menos 12 caracteres",
    PROVIDER_TAX_ID_TOO_LONG: "El RFC no puede exceder los 13 caracteres",
    PROVIDER_ADDRESS_REQUIRED: "La dirección del proveedor es requerida",
    PROVIDER_ADDRESS_TOO_LONG: "La dirección excede el límite de caracteres",
    PROVIDER_CONTACT_NAME_REQUIRED: "El nombre de contacto es requerido",
    PROVIDER_CONTACT_NAME_TOO_SHORT: "El nombre de contacto es demasiado corto",
    PROVIDER_CONTACT_EMAIL_REQUIRED: "El correo de contacto es requerido",
    PROVIDER_CONTACT_EMAIL_INVALID: "Ingresa un correo de contacto válido",
    PROVIDER_CONTACT_PHONE_REQUIRED: "El teléfono de contacto es requerido",
    PROVIDER_CONTACT_PHONE_TOO_SHORT: "El teléfono debe tener al menos 10 dígitos",
    PROVIDER_CONTACT_PHONE_INVALID: "El teléfono debe tener exactamente 10 dígitos",
    PROVIDER_UPDATE_NO_FIELDS: "No se detectaron cambios para actualizar",

    // Purchase Order
    PURCHASE_ORDER_ORDER_NUMBER_REQUIRED: "El número de orden es requerido",
    PURCHASE_ORDER_ORDER_NUMBER_MAX_LENGTH: "El número de orden es demasiado largo",
    PURCHASE_ORDER_PROVIDER_ID_REQUIRED: "Debes seleccionar un proveedor",
    PURCHASE_ORDER_CREATED_BY_REQUIRED: "El registro del creador es obligatorio",
    PURCHASE_ORDER_TOTAL_AMOUNT_REQUIRED: "El monto total de la orden es requerido",
    PURCHASE_ORDER_EXPECTED_DELIVERY_DATE_REQUIRED: "La fecha de entrega es requerida",
    PURCHASE_ORDER_EXPECTED_DELIVERY_DATE_FUTURE: "La fecha de entrega debe ser posterior a la actual",
    PURCHASE_ORDER_RECEIVED_DATE_FUTURE: "La fecha de recepción no puede ser una fecha futura",
    PURCHASE_ORDER_DETAILS_REQUIRED: "La orden debe incluir al menos un producto",
    PURCHASE_ORDER_DETAILS_MAX_COUNT: "Has excedido el límite de productos por orden",
    PURCHASE_ORDER_VARIANT_ID_REQUIRED: "Producto no válido en la orden",
    PURCHASE_ORDER_QUANTITY_ORDERED_REQUIRED: "La cantidad solicitada es requerida",
    PURCHASE_ORDER_UNIT_PRICE_REQUIRED: "El precio unitario es requerido",
    PURCHASE_ORDER_STATUS_INVALID: "El estado de la orden no es válido",
    PURCHASE_ORDER_COMMENTS_MAX_LENGTH: "Los comentarios son demasiado largos",
    PURCHASE_ORDER_UPDATE_EMPTY: "No se detectaron cambios para actualizar",

    // Role
    ROLE_NAME_REQUIRED: "El nombre del rol es requerido",
    ROLE_NAME_MIN_LENGTH: "El nombre del rol es demasiado corto",
    ROLE_NAME_MAX_LENGTH: "El nombre del rol es demasiado largo",
    ROLE_DESCRIPTION_MAX_LENGTH: "La descripción es demasiado larga",
    ROLE_NAME_DESCRIPTION_SAME: "La descripción debe ser diferente al nombre",
    ROLE_UPDATE_EMPTY: "No se detectaron cambios para actualizar",

    // Sale
    SALE_CUSTOMER_ID_INVALID: "Cliente no seleccionado o no válido",
    SALE_CREATED_BY_INVALID: "Vendedor no identificado",
    SALE_DETAILS_REQUIRED: "La venta debe incluir al menos un producto",
    SALE_DETAILS_MAX_COUNT_EXCEEDED: "Has excedido el límite de productos por venta",
    SALE_DETAILS_DUPLICATE_PRODUCTS: "Hay productos duplicados en el carrito",
    SALE_ID_INVALID: "Venta no identificada",
    SALE_STATUS_INVALID: "Estado de venta no válido",

    // Auth Domain
    AUTH_INVALID_CREDENTIALS: "Usuario o contraseña incorrectos. Verifica tus datos.",
    AUTH_USER_INACTIVE: "Tu cuenta de usuario está inactiva. Contacta al administrador.",
    AUTH_INVALID_REFRESH_TOKEN: "Tu sesión ha expirado. Por favor, ingresa de nuevo.",
    AUTH_USER_NOT_AUTHENTICATED: "Debes iniciar sesión para realizar esta acción",

    // Global / Common
    CONFLICT: "Esta acción no se puede realizar porque los datos han cambiado o ya existen.",
    DOMAIN_ERROR: "Ocurrió un error al procesar la solicitud. Por favor, intenta de nuevo.",
    SERVER_ERROR: "Ocurrió un error inesperado en el servidor. Por favor, intenta más tarde.",
    TOO_MANY_REQUESTS: "Has realizado demasiadas solicitudes. Por favor, intenta de nuevo más tarde.",
    NETWORK_ERROR: "No pudimos conectar con el servidor. Revisa tu conexión a internet.",


    // Not Found
    BRAND_NOT_FOUND: "La marca solicitada no existe",
    CASH_SESSION_NOT_FOUND: "No se encontró la sesión de caja",
    CASH_MOVEMENT_NOT_FOUND: "No se encontró el movimiento de efectivo",
    CATEGORY_NOT_FOUND: "La categoría no existe",
    CUSTOMER_NOT_FOUND: "El cliente no existe",
    CUSTOMER_ACCOUNT_NOT_FOUND: "No se encontró la cuenta del cliente",
    CUSTOMER_ACCOUNT_MOVEMENT_NOT_FOUND: "No se encontró el movimiento de la cuenta",
    USER_NOT_FOUND: "El empleado no fue encontrado",
    MOVEMENT_NOT_FOUND: "Movimiento de inventario no encontrado",
    PRODUCTMASTER_NOT_FOUND: "El producto solicitado no existe",
    PRODUCTVARIANT_NOT_FOUND: "La variante del producto no existe",
    PRODUCTVARIANT_NOT_FOUND_BY_BARCODE: "No se encontró ningún producto con ese código de barras",
    PROVIDER_NOT_FOUND: "El proveedor no existe",
    PURCHASE_ORDER_NOT_FOUND: "La orden de compra no existe",
    ROLE_NOT_FOUND: "El rol solicitado no existe",
    SALE_NOT_FOUND: "La venta no fue encontrada",
    SESSION_NOT_FOUND: "Sesión de caja no válida o cerrada",

    // Exists / Duplicates
    BRAND_NAME_EXISTS: "Ya existe una marca con este nombre",
    CATEGORY_NAME_EXISTS: "Ya existe una categoría con este nombre",
    CUSTOMER_ACCOUNT_ALREADY_EXISTS: "Este cliente ya tiene una cuenta activa",
    USER_USERNAME_EXISTS: "Este nombre de usuario ya está ocupado",
    PRODUCTMASTER_NAME_EXISTS: "Ya existe un producto con este nombre",
    PRODUCTVARIANT_BARCODECODE_ALREADY_EXISTS: "Este código de barras ya está registrado",
    PRODUCTVARIANT_SKU_ALREADY_EXISTS: "Este SKU ya está registrado",
    PROVIDER_NAME_EXISTS: "Ya existe un proveedor con este nombre",
    ROLE_NAME_EXISTS: "Ya existe un rol con este nombre",

    // Business Logic
    CASH_SESSION_ALREADY_OPEN: "Ya tienes una sesión de caja abierta",
    MOVEMENT_INSUFFICIENT_STOCK: "No hay suficiente stock para realizar esta operación",
    MOVEMENT_INVALID_QUANTITY: "La cantidad ingresada no es válida",
    MOVEMENT_UNAUTHORIZED_CREATION: "No tienes permisos para registrar este movimiento",
    PURCHASE_ORDER_CREATION_FAILED: "No se pudo crear la orden de compra",
    ROLE_PROTECTED: "Este es un rol del sistema y no puede ser modificado",
    SALE_CREATION_FAILED: "Ocurrió un error al procesar la venta",
    SALE_EMPTY_PRODUCTS: "Agrega al menos un producto para realizar la venta",
    SALE_INVALID_PAYMENT_METHOD: "El método de pago seleccionado no está disponible",
    SALE_INVALID_AMOUNT: "El monto ingresado para el pago no es válido",
    SALE_PAYMENT_EXCEEDS_TOTAL: "El pago no puede ser mayor al total de la venta",
    SALE_STATUS_CANCELLED: "No se puede operar sobre una venta ya cancelada",
    SALE_CANNOT_CANCEL_COMPLETED: "No se puede cancelar una venta que ya ha sido completada",
    SALE_INVALID_DETAIL: "Hay un error en uno de los artículos de la venta",
    SALE_TICKET_ALREADY_GENERATED: "El ticket de esta venta ya fue generado",
    SALE_DUPLICATE_DETAIL: "El mismo producto aparece varias veces en la venta",
    SALE_INVALID_PAYMENT_STATE: "El estado del pago no permite esta operación",
    SALE_INSUFFICIENT_PAYMENT: "El monto pagado es menor al total de la venta",

    // Image Upload
    IMAGE_SERVICE_UNAVAILABLE: "El servicio de carga de imágenes no está disponible",
    IMAGE_NOT_UPLOADED: "No se pudo cargar la imagen",
    IMAGE_NOT_DELETED: "No se pudo eliminar la imagen",

    // Rate Limit
    RATE_LIMIT: "Has realizado demasiadas solicitudes. Por favor, intenta de nuevo más tarde.",
};