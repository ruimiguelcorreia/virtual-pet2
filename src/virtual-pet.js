const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_HUNGER = 0;
const MAXIMUM_AGE = 30;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {

    isAlive() {
        if (this.age >= MAXIMUM_AGE || this.fitness <= MINIMUM_FITNESS || this.hunger >= MAXIMUM_HUNGER) {
            return false
        } else {
            return true
        }
    },
    
    growUp() {
        if (!this.isAlive()) {
            throw new Error ('Your pet is no longer alive.')
        } else {
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;
        }
    },

    walk() {
        if (!this.isAlive()) {
            throw new Error ('Your pet is no longer alive.')
        } else {
            if (this.fitness > 6) {
                this.fitness = MAXIMUM_FITNESS;
            } else {
                this.fitness += 4;
            }
        }
    },

    feed() {
        if (!this.isAlive()) {
            throw new Error ('Your pet is no longer alive.')
        } else {
            if (this.hunger <= 3) {
                this.hunger = MINIMUM_HUNGER;
            } else {
                this.hunger -=3;
            }
        }
    },

    checkUp() {
        if (!this.isAlive()) {
            throw new Error ('Your pet is no longer alive.')
        } else {        
            if (this.fitness <= 3 && this.hunger >= 5) {
                return ('I am hungry and I need a walk!')
            } else if (this.fitness <= 3) {
                return ('I need a walk!')
            } else if (this.hunger >= 5) {
                return ('I am hungry!')
            } else {
                return ('I feel great!')
            }
        }
    },

    haveBaby(pet) {
        this.children.push(pet);
    }
};

module.exports = Pet