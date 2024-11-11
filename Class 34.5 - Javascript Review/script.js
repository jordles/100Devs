/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- EASY ---------------------------------- */
//create a variable and assign it a number
let num = 20;
//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);

/* --------------------------------- MEDIUM --------------------------------- */
//create a variable that holds a value from the input
let input = Number(document.querySelector('#input').value) || 0;
//add 25 to that number
input += 25;
// alert that number
alert(input);

/* ---------------------------------- HARD ---------------------------------- */
//create a variable that holds the hl
const clickMe = document.querySelector('#clickme');
// add an event listener to that element that console logs the sum of the two previous variables
clickMe.addEventListener('click', () => {
  let numFromInput = Number(document.querySelector('#input').value) || 0;
  numFromInput += 25;
  console.log(num + numFromInput);
})

/* -------------------------------------------------------------------------- */
/*                                CONDITIONALS                                */
/* -------------------------------------------------------------------------- */

//Create a conditional that checks their age
//If they are under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//if under 21, tell them they can not drink
//if under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If they are over 30, tell them there is nothing left to look forward to

function checkAge(){
  let age = Number(document.querySelector('#age').value) || 0;
  const p = document.querySelector('#ageoutput');

  if(age < 16){
    p.innerText = 'You can not drive';
  } else if(age < 18){
    p.innerText = 'You can not hate from outside the club, because you can not even get in';
  } else if(age < 21){
    p.innerText = 'You can not drink';
  } else if(age < 25){
    p.innerText = 'You can not rent cars affordably';
  } else if(age < 30){
    p.innerText = 'You can not rent fancy cars affordably';
  } else if(age >= 30){
    p.innerText = 'There is nothing left to look forward to';
  }
}


/* --------------------------------- HARDER --------------------------------- */
// On click of the hl
// Take the value from the input
// Place the result of the conditional in the paragraph

const inputAge = document.querySelector('#agecheck')
inputAge.addEventListener('click', checkAge);

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- EASY ---------------------------------- */
//create a function that subtracts numbers and alerts the difference
function subtract(num1, num2){
  console.log(num1 - num2);
}

//create a function that divides three numbers and console logs the quotient
function divide(num1, num2, num3){
  console.log(num1 / num2 / num3);
}

//create a function that multiplies three numbers and returns the product

function multiply(num1,num2,num3){
  console.log(num1 * num2 * num3);
}

subtract(5,10);
divide(15,3,3);
multiply(5,5,5);
/* --------------------------------- MEDIUM --------------------------------- */

//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(num1, num2, num3){
  return (num1 + num2) % num3
}

console.log(remainder(5,10,2));
/* ---------------------------------- HARD ---------------------------------- */

//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100 subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number. 

function fourNum(num1, num2, num3, num4){
  let product = num1 * num2;
  product > 100 ? console.log(num3 + num4) :
  product < 100 ? console.log(num3 - num4) :
  alert((num1 * num2 * num3) % num4);
}

fourNum(50,2,5,5);

//Write the pseudo code first!

//c to f
document.querySelector('.ctof').addEventListener('input', cToF);
function cToF(){
  //need the value in c
  let temp = Number(document.querySelector('.ctof').value);
  //convert c to f
  temp = (temp * 9/5) + 32;
  //show the value
  document.querySelector('h2 > span').innerText = temp; 
  
}

/* -------------------------------------------------------------------------- */
/*                                  BACHELOR                                  */
/* -------------------------------------------------------------------------- */

document.querySelector('#finalRose').addEventListener('click', hide);

function hide(){
  document.querySelector('#bachelor1').style.display = 'none';
  document.querySelector('#bachelor3').style.display = 'none';
}

const andi = document.querySelector('#andi');
const claire = document.querySelector('#claire');
const sharleen = document.querySelector('#sharleen');

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)


function andiNext(){
  claire.classList.add('hidden')
  sharleen.classList.add('hidden')
  andi.classList.toggle('hidden')
}

function claireNext(){
  sharleen.classList.add('hidden');
  andi.classList.add('hidden');
  claire.classList.toggle('hidden');
}

function sharleenNext(){
  andi.classList.add('hidden');
  claire.classList.add('hidden');
  sharleen.classList.toggle('hidden');
}

const contestants = document.querySelectorAll('.contestant');
contestants.forEach(contestant => contestant.addEventListener('click', checkRose))

function checkRose(click){
  click.target.classList.contains('rose') ? document.querySelector('#nikki').classList.toggle('hidden') : alert('wrong!')
}

/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */
//Create a variable and console log the value
let myName = "Jordles";
console.log(myName);

//Create a variable, add 10 to it, and alert the value

let add10 = 0;
add10 += 10;
alert(add10);
/* -------------------------------------------------------------------------- */
/*                                    LOOPS                                   */
/* -------------------------------------------------------------------------- */

// Create a function that has a loop that prints '21' 21 times to the console and then call that function

function loop21(){
  for(let i = 0; i < 21; i++){
    console.log(21);
    document.querySelector('#loop21').innerText += '21 ';
  }
}
loop21();

//Bonus can you make it print '21' 21 times to the dom?

/* -------------------------------------------------------------------------- */
/*                                 BRING IT ON                                */
/* -------------------------------------------------------------------------- */
// *Variables*
// Create a variable and console log the value
let bringItOn = 10; console.log(bringItOn);
// Create a variable, add 10 to it, and alert the value
let bringItOn2 = 10; bringItOn2 += 10; alert(bringItOn2);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(num1, num2, num3, num4){
  alert(num1 - num2 - num3 - num4);
}
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2){
  return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add(num1, num2){
  if(num1 + num2 > 50) alert("Jumanji")
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply(n1, n2, n3){
  if(n1*n2*n3 % 3 === 0) alert("ZEBRA")
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopWord(word, num){
  for(let i = 0; i < num; i++){
    console.log(word);
  }
}

/* -------------------------------------------------------------------------- */
/*                              WHAT ARE ARRAYS?                              */
/* -------------------------------------------------------------------------- */
//Arrays stores an ordered collection. Created by the constructor and the literal notation

/* -------------------------------------------------------------------------- */
/*                      REVIEW-IN-PARADISE-AFTER-PARADISE                     */
/* -------------------------------------------------------------------------- */
// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function numAlert(arr){
  alert(arr[0] < arr[arr.length-1] ? "Hi" : arr[0] > arr[arr.length-1] ? "Bye" : "We close in an hour"); 
}

/* -------------------------------------------------------------------------- */
/*                             REVIEW-WINTER-GAMES                            */
/* -------------------------------------------------------------------------- */

//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function displayEven(arr){
  let newArr = []
  for(let num of arr){
    if(num % 2 == 0) newArr.push(num);
  }
  return newArr; 
}