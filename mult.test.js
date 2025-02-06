const mult = require('./mult')

test('A função soma deve retornar 5 ao somar 2 e 3' , () => {
    expect(mult(2,3)).toBe(6)
})

test('A função soma deve soma e deve retornar 2 ao somar 1 e 1',() => {
    expect(mult(1,1)).toBe(1)
})