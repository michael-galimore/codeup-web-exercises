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
for (var m = 1; m <= 100; m++){
    if(m % 3 === 0 && m % 5 === 0) {
        console.log(m + " FizzBuzz")
    } else if (m % 5 === 0){
        console.log(m + " Buzz")

    } else if (m % 3 === 0 ){
        console.log(m + " Fizz")
    }
}



