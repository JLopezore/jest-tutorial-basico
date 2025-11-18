const math = require('./math');

// 1. Matchers: .toBe()
// Compara igualdad estricta (===) para primitivos
describe('Matchers: .toBe (Igualdad Estricta)', () => {
    test('Sumar 10 + 20 debe ser 30', () => {
        expect(math.sum(10, 20)).toBe(30);
    });

    test('Multiplicar 5 * 2 debe ser 10', () => {
        expect(math.multiply(5, 2)).toBe(10);
    });

    test('El texto debe coincidir exactamente', () => {
        const mensaje = "Test";
        expect(mensaje).toBe("Test");
    });
});

// 2. Matchers: .not.toBe()
// Verifica que el valor NO sea igual al esperado
describe('Matchers: .not.toBe (Negación)', () => {
    test('Sumar 2 + 2 NO debe dar 5', () => {
        expect(math.sum(2, 2)).not.toBe(5);
    });

    test('El resultado de isNull() NO debe ser undefined', () => {
        // isNull devuelve null, que es diferente de undefined
        expect(math.isNull()).not.toBe(undefined);
    });

    test('El número 0 NO debe ser el string "0"', () => {
        expect(0).not.toBe("0");
    });
});

// 3. Matchers: .toEqual()
// Compara el contenido de objetos y arrays
describe('Matchers: .toEqual (Igualdad Profunda)', () => {
    test('Debe retornar el objeto de usuario con la estructura correcta', () => {
        // Comparamos dos objetos diferentes en memoria pero con mismo contenido
        expect(math.createUser("Ana")).toEqual({ name: "Ana", active: true });
    });

    test('Debe coincidir con el array esperado', () => {
        const lista = [1, 2, 3];
        expect(lista).toEqual([1, 2, 3]);
    });

    test('Dos objetos vacíos deben ser iguales', () => {
        expect({}).toEqual({});
    });
});

// 4. Matchers: .toBeTruthy()
// Pasa si el valor "cuenta" como verdadero (ej: números != 0, strings llenos, arrays)
describe('Matchers: .toBeTruthy (Verdadero Débil)', () => {
    test('Un string con texto ("Hola") es truthy', () => {
        expect("Hola").toBeTruthy();
    });

    test('El número 1 (o cualquier negativo) es truthy', () => {
        expect(math.sum(1, 0)).toBeTruthy();
    });

    test('Un array vacío [] es truthy en JavaScript', () => {
        expect([]).toBeTruthy();
    });
});

// 5. Matchers: .toBeFalsy()
// Pasa si el valor "cuenta" como falso (ej: 0, null, undefined, "")
describe('Matchers: .toBeFalsy (Falso Débil)', () => {
    test('La función isNull() devuelve algo falsy', () => {
        expect(math.isNull()).toBeFalsy();
    });

    test('El número 0 es falsy', () => {
        expect(0).toBeFalsy();
    });

    test('Un string vacío "" es falsy', () => {
        expect("").toBeFalsy();
    });
});