const Pet = function(name, species, food) {
    this.name = name;
    this.species = species;
    this.vet = "Dr Dolittle";

}

Pet.prototype.eat = function (food) {

    if (this.species === "dog" && food === "chocolate"){
        console.log(`"Awooo!" \n "${this.name} is sick! We need to take them to see ${this.vet}!"`);
    } else if (this.species === "cat" && food === "aloe vera") {
        console.log(`"Bleugh! ${this.name} has vomited everywhere! Have they been eating the ${food}? We need to see ${this.vet}, again."`);
    }
    else {
        console.log(`${this.name} ate a ${food}.`);
    }
}

Pet.prototype.make_sound = function() {
    if (this.species == "dog"){
        console.log(`Woof Woof!`);
}   else {
        console.log("Miaow!");
}
}

//js requires you to explicitly state what is being exported.
module.exports = Pet;


