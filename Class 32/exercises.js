//Let's Build An Agency
//Come up with a parent class
//Extend that parent class into two children
//Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor{
  #name;
  #role;
  constructor(name, role){
    this.#name = name;
    this.#role = role;
  }

  get name(){
    return this.#name;
  }

  get role(){
    return this.#role;
  }

  speak(){
    console.log(`${this.#name} is a ${this.#role}`);
  }

  bye(){
    console.log(`${this.#name} has left the building`);
  }
}

class frontEnd extends Contractor {
  #tech;
  constructor(name, role, tech) {
    super(name, role);
    this.#tech = tech;
  }

  get tech() {
    return this.#tech;
  }

  speak() {
    console.log(`${this.name} is a ${this.role} and works in ${this.#tech}`);
  }
}

class backEnd extends Contractor{
  #tech;
  constructor(name, role, tech){
    super(name, role);
    this.#tech = tech;
  }

  get tech(){
    return this.#tech;
  }

  speak(){
    console.log(`${this.name} is a ${this.role} and prefers in ${this.#tech}`);
  }

}

let jacky = new frontEnd("Jacky", "Front End Developer", "React");
console.log(jacky)


let jordles = new backEnd("Jordles", "Back End Developer", "Node");
console.log(jordles)
jordles.bye();

let objects = [jacky, jordles];

for (obj of objects) {
  obj.speak();
}