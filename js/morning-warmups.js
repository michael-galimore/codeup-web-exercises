"use strict"
//
// function returnSev() {
//     return 7;
// };
// console.log(returnSev)
//
// var ownsCow = false;
// var ownsGoat = false;
//  if (ownsCow) {
//      console.log("Milking my cow");
//  } else if (ownsGoat) {
//      console.log("milking goat");
//  } else {
//      console.log("going to the heb");
//  }
//
//  function isThisThirtyFive(parameter) {
//      if (parameter > 35) {
//          return "That number is greater than 35";
//      } else if (parameter < 35) {
//          return "That number is less than 35";
//      } else {
//          return "This is 35!"
//      }
//  }
//
//  console.log(isThisThirtyFive(34))
//  console.log(isThisThirtyFive(35))
//  console.log(isThisThirtyFive(36))
//
// var doWeHaveMilk = true
// var action = (doWeHaveMilk) ? "Bring on the Coco Puffs" : "I am headed to the HEB"
// console.log(action)
//
//
//
// var hadBreakfast = Boolean(Math.round(Math.random()));
//  var hadBreakfastMessage = (hadBreakfast) ? "Breakfast was awesome!" : "Where's my breakfast?";
//
//  console.log(hadBreakfast);
//  console.log(hadBreakfastMessage);

// Had if(m % 3 === 0 && m % 5 === 0) {console.log(m + " FizzBuzz") last
//instead of first.
// for (var m = 1; m <= 100; m++){
//     if(m % 3 === 0 && m % 5 === 0) {
//         console.log(m + " FizzBuzz")
//     } else if (m % 5 === 0){
//         console.log(m + " Buzz")
//
//     } else if (m % 3 === 0 ){
//         console.log(m + " Fizz")
//     }
// }

//
// var g = [1, 2, 3, 4]
// function secondToLast(arr){
//     return arr[arr.length - 2];
// }
// cosole.log(secondToLast(arr[]))


//Write a function named 'moveToEnd' that takes in an array, and returns the array with the original first index moved to the last index of the array.
//
// Example:
// moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];


// function moveToEnd(arr){
//     var removedElement = arr.shift();
//     arr.push(removedElement);
//     return arr;
// }
// console.log(moveToEnd(1,2,3,4))
// console.log(moveToEnd("roll", "rock", "and"))


// Warmup: Visit https://www.pokemon.com/us/pokedex/ and select one of your
// favorite pokemon (it can be whatever you choose) and create an object variable
// to represent the chosen pokemon. The more information you have the better! We
// will be using this for lecture later today as well.

var bulbasaur = {
    name: "Bulbasaur",
    type: ["grass, poison"],
    height: {
        feet: 2,
        inches: 4,
    },

}


//Create a function that accepts an array as an argument,
// and that returns an array of objects that have a nationality
// property of “Canadian”.


var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];
function nationalities(arr){
    var bucket = [];
    arr.forEach(function (element) {
        if(element.nationality === "Canadian"){
            bucket.push(element);
        }
    });
return bucket;
}

console.log(nationalities(wrestlers))

var circle = {
    radius: 36
}

function cir(rad){
    return (rad * rad * Math.PI);
}
console.log(cir(36))


// Area of a circle is PI * radius^2
var area = Math.PI * (Math.pow(circle.radius,2))

console.log(area)



var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];


function getHighestQuantityObject(arr) {
    if(name.quantity > name.quantity)
    return name + name.quantity
}
console.log(getHighestQuantityObject(name + name.quantity))

function getHighestQuantityObject(arr) {
    var ob = {
        name: "something"
        quantity: 0
    }
    arr.forEach(function(el){
        if(el.quantity > ob.quantity){
            ob = el;
        }
    })
}
console.log(getHighestQuantityObject(groceries))