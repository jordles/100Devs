/* JAVASCRIPT ARRAY METHODS
https://javascript.info/array-methods

Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased. */

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }
  
  /* Filter range
  importance: 4
  Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. */
  
  function filterRange(arr, a, b){
    return arr.filter(num => num >= a && num <= b);
  }
  
  /* Filter range "in place"
  importance: 4
  Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
  
  The function should only modify the array. It should not return anything. */
  
  function filterRangeInPlace(arr, a, b){
    arr.forEach((num, index) => num < a || num > b ? arr.splice(index, 1) : null);
  }
  
  /* Sort in decreasing order
  importance: 4 */
  
  function sortDecrease(arr){
    return arr.sort((a,b) => b-a);
  }
  
  /* Copy and sort array
  importance: 5
  We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
  
  Create a function copySorted(arr) that returns such a copy. */
  
  function copySorted(arr){
    let newArr = [...arr];
    return newArr.sort(); 
  }
  
  /* Create an extendable calculator
  importance: 5
  Create a constructor function Calculator that creates “extendable” calculator objects.
  
  The task consists of two parts.
  
  First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
  
  Usage example:
  
  let calc = new Calculator;
  
  alert( calc.calculate("3 + 7") ); // 10
  
  Second,
  Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
  
  For instance, let’s add the multiplication *, division / and power **:
  
  let powerCalc = new Calculator;
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 ** 3");
  alert( result ); // 8
  No parentheses or complex expressions in this task.
  The numbers and the operator are delimited with exactly one space.
  There may be error handling if you’d like to add it. */
  
  function Calculator(){
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b
    };
    this.calculate = function(str){
      let split = str.split(' ');
      let a = +split[0];
      let op = split[1];
      let b = +split[2];
      return this.methods[op](a, b);
    }
    this.addMethod = function(name, func){
      this.methods[name] = func;
    }
  
  }
  // ------------------------------------------
  
  /* Map to names
  importance: 5
  You have an array of user objects, each one has user.name. Write the code that converts it into an array of names. */
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [ john, pete, mary ]; //code added here
  
  let names = users.map(obj => obj.name);
  alert(names); 
  // ------------------------------------------
  
  
  /* Map to objects
  importance: 5
  You have an array of user objects, each one has name, surname and id.
  
  Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
  
  For instance:
   */
  
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  
  let users = [ john, pete, mary ];
  
  let usersMapped = users.map(obj => (
    {fullName: `${obj.name} ${obj.surname}`, id: obj.id}
  )); //code added here
  
  /*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */
  
  alert( usersMapped[0].id ) // 1
  alert( usersMapped[0].fullName ) // John Smith
  /* So, actually you need to map one array of objects to another. Try using => here. There’s a small catch. */
  
  // ------------------------------------------
  /* Sort users by age
  importance: 5
  Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
  
  For instance: */
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arr = [ pete, john, mary ];
  
  sortByAge(arr);
  
  // now: [john, mary, pete]
  alert(arr[0].name); // John
  alert(arr[1].name); // Mary
  alert(arr[2].name); // Pete
  
  //code added here
  function sortByAge(users){
    return arr.sort((a,b) => a.age - b.age);
  }
  
  // ------------------------------------------
  
  /* Shuffle an array
  importance: 3
  Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
  
  Multiple runs of shuffle may lead to different orders of elements. */
  
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  //Math.random() - 0.5 is a random number that may be positive or negative, so the sorting function reorders elements randomly. 
  
  /* If the result is negative, num is sorted before 
  If the result is positive, num is sorted after */
  
  //---------------------------------------------------
  
  /* Get average age
  importance: 4
  Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
  
  The formula for the average is (age1 + age2 + ... + ageN) / N. */
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };
  
  let arr = [ john, pete, mary ];
  
  alert(getAverageAge(arr)); //28
  
  function getAverageAge(arr){
    return arr.reduce((prevObj,obj) => prevObj + obj.age)/arr.length;
  }
  
  //---------------------------------------------------
  
  /* Filter unique array members
  importance: 4
  Let arr be an array.
  
  Create a function unique(arr) that should return an array with unique items of arr. */
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O
  
  function unique(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index);
  }
  //indexOf will find the first instance of item's index which is used to check the current index in the filter function to see if they match
  //------------------------------------------------
  
  
  /* Create keyed object from array
  importance: 4
  Let’s say we received an array of users in the form {id:..., name:..., age:... }.
  
  Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */
  
  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
  
  /* Such function is really handy when working with server data.
  
  In this task we assume that id is unique. There may be no two array items with the same id.
  
  Please use array .reduce method in the solution. */
  
  function groupById(arr){
    return arr.reduce((obj,item) => {
      obj[item.id] = item; //we assign new objects
      return obj;
    },{}) //{} is our initial value passed to the accumulator, because we are returning an object 
  
    //We know the first parameter of reduce is the return value. While the second parameter is our current value, in this case the actual objects inside the array.
    //We assign our id properties to equal the object itself.
    //We return the object.
    //The return value is the accumulator.
    //The accumulator is the return value of the previous iteration.
    //The accumulator is the object we created.
    
    /*Another way to write it without the reduce function:
    
    function groupById(array) {
    const obj = {};
      for (const value of array){
        obj[value.id] = value
      }
    return obj;
    } */
  }
  
  //------------------------------------------------
  
  /* https://eloquentjavascript.net/04_data.html */
  
  /* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
  
  Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
  
  As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]. */
  
  function range(start, end){
    let arr = [];
    for(let i = start; i < end; i++){
      arr.push(i);
    }
    return arr;
  }
  
  function sum(arr){
    return arr.reduce((total, num) => total + num);
  }
  
  //bonus
  function range(start, end, step){
    let arr = [];
    for(let i = start; i< end; i+= step){
      arr.push(i);
    }
    return arr;
  }
  
  //--------------------------------------------------
  
  /* Reversing an array
  Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
  
  Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster? */ //the first function would run faster
  
  function reverseArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      newArr.unshift(arr[i]);
    }
    return newArr;
  }
  
  function reverseArrayInPlace(arr) {
    for(let i = 0; i < arr.length - 1; i++){
      let temp = arr[i]; //temp = 0, temp = 1, temp = 2
      arr[i] = arr[arr.length - 1-i]; //arr[0] = arr[2], arr[1] = arr[1], arr[2] = arr[0]
      arr[arr.length - 1-i] = temp; //arr[2] = arr[0], arr[1] = arr[1], arr[0] = arr[2];
    }
    return arr;
  }
  //--------------------------------------------------
  
  /* A list
  Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
  
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };
  The resulting objects form a chain, like this:
  
  A linked list
  A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.
  
  Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
  
  If you haven’t already, also write a recursive version of nth. */
  function arrayToList(arr){
    return arr.map((val, i) => {
      return {value: val, rest: arr[i + 1] || null}
  })
  }
  
  function listToArray(list){
      let arr = [];
      for(let n = list; n; n = n.rest){
          arr.push(n.value);
      }
      return arr;
  }
  
  function listToArrayRecursion(list) {
    if (list === null) {
      return [];
    } else {
      // Recursive case: return an array containing the current value followed by the array representation of the rest of the linked list. We use the spread operator to expand the array to include the current value.
      return [list.value, ...listToArrayRecursion(list.rest)];
    }
  }
    
  function prepend(el, list){
    return {value: el, rest: list};
  }
  
  function nth(list, n){
    function nth(list, n) {
    let node = list;
    for (let i = 0; i < n; i++) {
      if (!node) return undefined;
      node = node.rest; //we are traversing the object, and we are moving to the next object in the list. Once we reach the nth node, we stop. 
    }
      //we check if this node is undefined, if not return its value. 
  
    if (!node) return undefined;
    return node.value;
  }
    
  }
  function nth(list, n){
    if(!list){
      return undefined;
    } else if(n === 0){
      return list.value;
    } else {
      return nth(list.rest, n - 1); //recursion, replaces the for loop and goes down the heirarchy of objects
    }
  }
  
  //--------------------------------------------------
  /* Deep comparison
  The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.
  
  Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
  
  To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
  
  The Object.keys function will be useful when you need to go over the properties of objects to compare them. */
  function deepEqual(a, b){
    if(a === b){
      return true;
    }
    if(a == null || typeof a != "object" || b == null || typeof b != "object"){
      return false;
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if(keysA.length != keysB.length){
      return false;
    }
    for(let key of keysA){
      if(!keysB.includes 
         (key) || !deepEqual(a[key], b[key])){
        return false;
        }
      }
    return true;
  }
  