
//Prompt the user for an odd number between 1 and 50. Use a loop and a break
// statement to continue prompting the user if they enter invalid input.
//
// Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.


// var z = prompt("Odd number 1-50")
// for (var z; z < 50; z ++) {
//     if (z % 2 === 0) {
//         prompt("Pick an odd number 1-50.")
//     } else if(z !== 0){
//         alert("odd")
//         console.log("odd number.")
//         break;
//     }
// }

// class code
var userNum;

while (true) {
    userNum = parseInt(prompt("Give me an odd number between 1 and 50!"))
    if(userNum >= 1 && userNum <= 50 && userNum % 2 !== 0) {
        break;
    }
}
    for(var b = 1; b <= 50; b++){
        if(b % 2 === 0) {
            continue;
        }
        if (b === userNum) {
            console.log("We don't talk about " + userNum + "around these parts...")
            continue;
        }
        console.log("Here's an odd number: " + b)
    }