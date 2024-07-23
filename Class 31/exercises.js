//Create an a class and extend it - Can be anything you would like it to be!
class Food{
  constructor(name){
    this.name = name;
  }

  eat(){
    console.log(`I'm eating ${this.name}`);
  }
}

class Fruit extends Food{
  constructor(name, color){
    super(name);
    this.color = color;
  }
}

const strawberry = new Fruit('strawberry', 'red');
strawberry.eat()


//utilizing private properties and methods with getters to limit users from assigning your properties

class Animal{
  #name;
  constructor(name){
    this.#name = name;
  }

  get name(){
    return this.#name;
  }

  speak(){
    console.log(`${this.#name} makes a noise`);
  }
}

class Dog extends Animal{
  #breed;
  constructor(name, breed){
    super(name);
    this.#breed = breed;
  }

  get breed(){
    return this.#breed;
  }

  speak(){
    super.speak();
    console.log(`${this.name} barks`);
  }
}

const simba = new Dog('Simba', 'Shepard');
console.log(simba);
console.log(simba.breed)
simba.breed = 'Poodle';
console.log(simba.breed);