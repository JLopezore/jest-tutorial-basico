const math = {
    // Operaciones matemáticas básicas
    sum: (a, b) => a + b,
    multiply: (a, b) => a * b,

    // Funciones que retornan valores especiales
    isNull: () => null,
    isUndefined: () => undefined,

    // Función que crea un objeto (útil para toEqual)
    createUser: (name) => ({ 
        name: name, 
        active: true 
    })
};

module.exports = math;