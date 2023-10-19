/* https://javascript.info/object-basics */

//-------------------------------------------------------------
/* https://javascript.info/object */

/* Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */
let user={}
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/* Check for emptiness
importance: 5
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false */

function isEmpty(obj){
  for(let key in obj){
    return false;
  }
  return true;
}

/* Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//You can also use for loop to add to a sum
let values = Object.values(salaries); //creates a new array of values
console.log(values.reduce((total, num) => total+num, 0));

/* Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here. */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for(let key in obj){
     typeof obj[key] == 'number'{
       obj[key] *=2;
     }
  }
}

//--------------------------------------------------------------
/* https://javascript.info/object-methods */

/* Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? */

It would be an error. 'This' does not look at object definition. It only matters within its call.

We can make it work by making it a method, to refer to the outer function.

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
  

/*Create a calculator
  importance: 5
  Create an object calculator with three methods:

  read() prompts for two values and saves them as object properties with names a and b respectively.
  sum() returns the sum of saved values.
  mul() multiplies saved values and returns the result.
  let calculator = {
    // ... your code ...
  };

  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() ); */

let calculator = {
  read(){
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  }

  sum(){
    return this.a + this.b;
  }

  mul(){
    return this.a * this.b;
  }
}

/* Chaining
importance: 2
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such approach is widely used across JavaScript libraries. */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; //this way we return the object itself every call. So we can chain these methods. 
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); // shows 1 then 0

//------------------------------------------------------------
/* https://javascript.info/constructor-new */

/* Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code. */

let obj = {};
function A(){
  return obj;
}

function B(){
  return obj; 
}

/* Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator(){
  this.read = () => {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  }

  this.sum = () => {
    return this.a + this.b;
  }

  this.mul = () => {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

/* Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values */

function Accumulator(startingValue){
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt('value', 0);
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values