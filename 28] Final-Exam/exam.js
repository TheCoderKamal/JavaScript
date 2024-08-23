/*
    oops

    x 1. polymorphism
    x 2. Inheritance-3 type of inheritance 
    x 3. Abstraction
    x 4. Encapsulation

    x 3 types of constructor

    x conditional classes
*/

// Animal class is extended by Dog and Cat class so this shows Hierarchical inheritance;
class Animal{
    // Default constructor;
    constructor(){
        this.name = "Animal";
        this.sound = "Generic Sound";
    }

    info(){
        return console.log(`${this.name} sounds like ${this.sound}`);
    }
}

// Dog class is extended by Animal class so this shows Simple inheritance;
class Dog extends Animal{
    // parameterized constructor;
    constructor(name, sound, breed){
        super();
        this.name = !name ? "Buddy" : name;
        this.sound = !sound ? "Barks" : sound;
        this.breed = !breed ? "German Shepherd" : breed;
    }

    // It is polymorphism cause it overrides a method;
    info(){
        return console.log(`${this.name} sounds like ${this.sound}`);
    }

    // breed method is an example of Encapsulation cause it is exclusive for Dog class;
    breedInfo(){
        return console.log(`${this.breed} is a very cute breed.`);
    }
}

// Puppy class extends Dog class and Dog class extends Animal class so this shows Multilevel inheritance;
class Puppy extends Dog{
    constructor(name, sound, breed, color){
        super(name, sound, breed);
        this.color = !color ? "black" : color;
    }

    // copy constructor;
    copy(){
        return new Puppy(this.name, this.sound, this.breed, this.color);
    }

    // It is polymorphism cause it overrides a method;
    info(){
        return console.log(`${this.name} is ${this.color} in color`);
    }
}

class Cat extends Animal{
    constructor(name, sound, color){
        super(); // Call the parent class constructor
        this.name = !name ? "Kitty" : name;
        this.sound = !sound ? "Meows" : sound;
        this.color = !color ? "white" : color;
    }

    // It is polymorphism cause it overrides a method;
    info(){
        return console.log(`${this.name} is ${this.color} in color`);
    }
}

// made the objects
let animal = new Animal();
let dog = new Dog("akamaru", "barks", "ninja dog");
let cat = new Cat("billa", "meows", "black");
let puppy = new Puppy();

// log the objects
console.log(animal);
console.log(dog);
console.log(cat);
console.log(puppy);
