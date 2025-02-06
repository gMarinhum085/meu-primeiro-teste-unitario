const sub = require('./sub')

test('A função soma deve retornar 5 ao somar 2 e 3' , () => {
    expect(sub(3,2)).toBe(1)
})

test('A função soma deve soma e deve retornar 2 ao somar 1 e 1',() => {
    expect(sub(4,1)).toBe(3)
})