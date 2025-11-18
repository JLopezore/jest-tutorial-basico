const sum = require ('./math');

test('debe sumar 1 + 2 y ser igual a 2', () =>  {
    const result = sum(1,2);
    // 4. Jest: El 'matcher' (toBe) verifica la afirmación
    expect(result).toBe(3);
});

test('debe sumar -10 + 5 y ser igual a -5', () => {
    expect(sum(-10,6)).not.toBe(-5);
})

test('debe retornar un objeto con el resultado y el esttado', ()=> {
    const data = {
        result: sum(10, 5),
        success: true
    }
    // usamos toEqual porque estamos comparando obetos (no solo valores primitivos)
    expect(data).toEqual({
        result: 15,
        success: true
    })
});

