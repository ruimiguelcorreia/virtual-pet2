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
    });

    test('return the initial hunger of the pet', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    test('returns the hunger incremented by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    test('return the initial fitness of the pet', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });

    test('returns the fitness decremented by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

    test('return the fitness equal to 10, when it is above 6', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    test('returns the new fitness value, when below 6', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    test('returns hunger level decreased by feeding the pet', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });

    test('returns an alert when the fitness level is low', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.feed();
        pet.feed();
        pet.feed();
        pet.feed();
        expect(pet.checkUp()).toBe('I need a walk!');
    });

    test('returns an alert when the pet is hungry', () => {
        const pet = new Pet('Fido');
        pet.growUp()
        expect(pet.checkUp()).toBe('I am hungry!');
    });

    test('returns an alert when the fitness is low and pet is hungry', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.growUp();
        expect(pet.checkUp()).toBe('I am hungry and I need a walk!');
    });

    test('returns a state of happiness when the pet levels are ok', () => {
        const pet = new Pet('Fido');
        expect(pet.checkUp()).toBe('I feel great!');
    })
});