/*Variable*/

/*Declare two variables: admin and name.*/
let admin;
let name;
/*Assign the value "John" to name.*/
name = "John";
/*Copy the value from name to admin.*/
admin = name;
/*Show the value of admin using alert (must output “John”).*/
/*alert(admin);*/

/*Create a variable with the name of our planet. How would you name such a variable?*/
let planet = 'earth';
/*Create a variable to store the name of a current visitor to a website. How would you name that variable?*/
let visitor = 'name';

const BIRTHDAY = '18.04.1982'; // make birthday uppercase? Uppercase

const age = someCode(BIRTHDAY); // make age uppercase? Lowercase

//Is else required?
function checkAge(age) {
    if (age > 18) {
        
    } else {
    // ...
        return confirm('Did parents allow you?');
    }
}
//There is no difference, because return ends the function itself. So if it was true, it would return true.
//If it was false, it would exit out of the condition and move on to the next statement which is the return. 

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

//Using the || operator 

function checkAge(age){
    return age > 18 || confirm('Did parents allow you?');
}

//using the ? operator

function checkAge(age){
    return age > 18 ? true : confirm('Did parents allow you?');
}

//function mix(a,b)
function min(a,b){
    return a > b ? a : b;
}
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

//function pow(x,n)
function pow(x,n){
    if (x < 0) {
        return 'Place a positive number for n';
    }
    else{
        let result = x;

        for (let i = 1; i < n; i++) {
        result *= x;
        }

        return result;
    }
}

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1