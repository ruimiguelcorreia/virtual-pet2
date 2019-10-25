const Pet = require("../src/virtual-pet");

describe('create a new object with a set of properties', () => {
    let pet;
    beforeEach(() => {
        pet = new Pet('Fido');
    });

    test('create a new object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    test('return the object with a name property', () => {
        expect(pet.name).toStrictEqual('Fido');
    });

    test('return the initial age of the pet', () => {
        expect(pet.age).toEqual(0);
    });

    test('returns the age incremented by 1', () => {
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    test('return the initial hunger of the pet', () => {
        expect(pet.hunger).toEqual(0);
    });

    test('returns the hunger incremented by 5', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    test('return the initial fitness of the pet', () => {
        expect(pet.fitness).toEqual(10);
    });

    test('returns the fitness decremented by 3', () => {
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

    test('return the fitness equal to 10, when it is above 6', () => {
        pet.fitness = 7;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    test('returns the new fitness value, when below 6', () => {
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    test('returns hunger level decreased by feeding the pet', () => {
        pet.hunger = 7;
        pet.feed();
        expect(pet.hunger).toEqual(4);
    });

    test('returns an alert when the fitness level is low', () => {
        pet.fitness = 2;
        expect(pet.checkUp()).toBe('I need a walk!');
    });

    test('returns an alert when the pet is hungry', () => {
        pet.hunger = 6
        expect(pet.checkUp()).toBe('I am hungry!');
    });

    test('returns an alert when the fitness is low and pet is hungry', () => {
        pet.fitness = 2;
        pet.hunger = 6;
        expect(pet.checkUp()).toBe('I am hungry and I need a walk!');
    });

    test('returns a state of happiness when the pet levels are ok', () => {
        expect(pet.checkUp()).toBe('I feel great!');
    });

    test('pet is alive', () => {
        expect(pet.isAlive()).toBe(true);
    });

    test('pet dies if fitness is at its minimum', () => {
        pet.fitness = 0;
        expect(pet.isAlive()).toBe(false);
    });

    test('pet dies if hunger is at its maximum', () => {
        pet.hunger = 10;
        expect(pet.isAlive()).toBe(false);
    });
    
    test('pet dies after reaching the maximum age', () => {
        pet.age = 30;
        expect(pet.isAlive()).toBe(false);
    });

    test('')
});