const Pet = require("../src/virtual-pet");

describe('create a new object with a set of properties', () => {
    
    test('create a new object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    test('return the object with a name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toStrictEqual('Fido');
    });

    test('return the initial age of the pet', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    test('returns the age incremented by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
})