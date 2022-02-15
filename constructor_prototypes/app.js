
//import statements
const Pet = require('./pet.js');
const Person = require('./person.js');

const scooby = new Pet("Scooby", "dog");
const baron = new  Pet("Baron", "cat");

const shaggy = new Person("Shaggy Rogers", scooby);
const velma = new Person("Velma Dinkley");

shaggy.feedPet("chicken");

shaggy.feedPet("chocolate");

