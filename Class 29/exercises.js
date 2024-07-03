//BOULDER BADGE
// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.
console.group("Exercises");
function getCandies(currentLv, evolveLv) {
  return evolveLv - currentLv;
}

const bulbasaur = getCandies(5, 16);
const weedle = getCandies(1, 7);
const caterpie = getCandies(1, 7);

const totalCandies = [bulbasaur, weedle, caterpie].reduce(
  (acc, num) => acc + num,
  0
);

console.log(totalCandies);

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahToCel(f) {
  return ((f - 32) * 5) / 9;
}

function canBattle(temp) {
  const celsius = fahToCel(temp);
  return celsius > 0
    ? console.log("Charmander can battle!")
    : console.log("Charmander can not battle");
}

canBattle(30);

//Loops
//You have joined an underground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function pokemon(num) {
  for (let i = 0; i < num; i++) console.log("Pikachu i choose you");
}
pokemon(10);

//CASCADE BADGE
//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

function reverse(list) {
  console.log(list.reverse());
}

reverse(["bulbasaur", "charmander", "squirtle"]);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareArray(a, b) {
  return (
    a.reduce((acc, num) => {
      const squared = num ** 2;
      return acc + squared;
    }) >
    b.reduce((acc, num) => {
      const cubed = Math.pow(num, 3);
      return acc + cubed;
    })
  );
}

console.log(compareArray([1, 2, 3], [1, 2, 3]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multiple(arr) {
  return arr.filter((num, index) => num % index == 0);
}

console.log(multiple([22, -6, 32, 82, 9, 25]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sum(arr) {
  return arr.reduce((acc, num) => acc + +num, 0);
}
console.log(sum([1, "2", 3]));

//RAINBOW BADGE

//Example fetch using pokemonapi.co
//pokemon api already done on previous assignment.
//https://jordles.github.io/Kalos-Pokedex/

console.groupEnd("Exercises");