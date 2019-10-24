const Pet = require("../src/virtual-pet");

describe('create a new object with a set of properties', () => {
    
    test('create the object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })
})