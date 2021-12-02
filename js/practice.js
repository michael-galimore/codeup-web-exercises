"use strict";

// A function is a block is a block of reusable code that performs a specific task.
// Function typically take in an input, and produce an output.

// Functions that we have used.
// prompt();
// alert();
// number();
// parseFloat();
// parseInt();
// .toFixed();
// .toUpperCase();

// When executing a function, we call the name of the function, following any input inside the parenthesis
// know as arguments.
prompt("What is your name?") // returns a string


// Function Structure

// function todaysDate(paramenter1, parameter2, etc...) {
//     // Do something
//     // return something
// }

function todaysDate(greeting) {
    reutrn greeting + Date();
}

// execute function

var date = todaysDate(greeting: "Today's date is: ");
console.log(date);


// Function declaration
function echo(phrase) {
    return phrase + " " + phrase
}

console.log(echo(phrase:"hello"))

//Function expression / anonymous function
var sayBye = function (name) {
    return "Goodbye " + name;
}

sayBye("Mike");


//Example

// Create a function that takes in two number parameters to find the hypotenuse angle

// Parameters are the placeholders stated in the function
function findHy(a, b) {
    var result;
    result = Math.sqrt((a * a) + (b * b))
    return result;
}

// Have a triangle with the sides of 4 and 5

// Arguements are the that are put into the function
console.log(findHy(4, 5))
console.log(findHy(10, 5))


// Function SCOPE

// Scope is a term to describe where a variable can be accessed.

function greeting() {
    var firstName = "Mike";
    var lastName = "Galimore";
    return "Hello " + firstName + lastName;
}
console.log(greeting());
console.log(firstName, lastName);

// Immediately Invoked Function Expression (IIFE)

(function () {
    var ifvVar = "I am local to the IIFE"
})();

console.log(ifyVar)


function allIndexesOf(){

}



