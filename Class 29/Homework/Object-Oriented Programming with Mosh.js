
console.group('Object-Oriented Programming with Mosh');

//4 pillars of OOP

//Encapsulation - building variables and methods into objects(unit) to ensure data privacy and security. 

//Abstraction - hiding details from the user and showing only essentials (interface) (through private variables and methods with # syntax)

//Inheritance allows one class to inherit properties and methods from another class (through prototype chain)

//Polymorphism - multiple forms where the same methods from different objects can be used and behave differently (through overriding/overloading methods and inheritance)



class firstClass {
  add() {
    console.log("First Method");
  }
}
class secondClass extends firstClass {
  add() {
    console.log(30 + 40);
  }
}
class thirdClass extends secondClass {
  add() {
    console.log("Last Method");
  }
}
let ob = new firstClass();
let ob2 = new secondClass();
let ob3 = new thirdClass();
ob.add();
ob2.add();
ob3.add();


//object (literal syntax)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
}; 

//factory function (return an object)

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circles = createCircle(1);

circles.draw();

//constructor function (this keyword, new operator)

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}


Circle.call({}, 1);
Circle.apply({}, [1]);

const Circle1 = new Function( //functions are also objects, we usually don't create them through its constructor though. 
  "radius",
  `   this.radius = radius;
      this.draw = function(){
          console.log('draw');
      }
  `
);
const another = new Circle(1);

//The video also mentions using private variables and methods for Abstraction, which can be done with closures and getters and setters to return and set values.


//Prototypes - are objects that can be inherited by other objects through the prototype chain. (main purpose is for inheritance)

//Before classes were introduced, functions were used to define objects and set up their prototypes like so:

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

const person = new Person('Alice');
person.greet(); // "Hello, Alice"

//Of course, you can always place a function inside the Object, and it will implicitly become part of its prototype.

//Through classes, we can create objects with their own properties and methods, and set up their prototype through the class syntax explicitly. 

//Anytime we want to modify the prototype, we can do so through the prototype itself (.prototype)
console.groupEnd('Object-Oriented Programming with Mosh');