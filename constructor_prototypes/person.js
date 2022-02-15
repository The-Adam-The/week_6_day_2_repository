

//constructor
const Person = function(name, pet) {
    this.name = name;
    this.pet = pet;
}

//prototype
Person.prototype.greet = function() {
    console.log(`Hi, my name is ${this.name}`);
}
Person.prototype.feedPet = function(food) {
    console.log(`${this.name} fed ${this.pet.name} a ${food}.`);
    this.pet.eat(food);
}

module.exports = Person;