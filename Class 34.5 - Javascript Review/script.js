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
