


// Create a function named showMultiplicationTable that accepts a number
// and console.logs the multiplication table for that number (just multiply
// by the numbers 1 through 10)


var m = 7
var g;
for (var i = 1; i <= 10; i++) {
    g = m * i;
console.log(g)
}

function showMultplicationTable(num){
    for (m = 1; m <= 10; m++){
        console.log(num + " x " + m + (num * m))
    }
} showMultplicationTable(7)



function showMultiplicationTable(num){
    for(var m = 1; m <= 10; m++) {
        var i = 7;
       var g = m * i;
    } console.log(g)
}

// Use a for loop and the code from the previous lessons to generate 10 random
// numbers between 20 and 200 and output to the console whether each number is
// odd or even.

var x = Math.random() * 201 + 20;

for(var y = 1; y < 20; y++) {
    var d = x * y;
    if (x % 2 === 0) {
        continue;
}
if (x % 2 !== 0) {
    console.log("This is an odd number");
    }
}

// class code
for(t = 1; t <= 10; t++){
    var randomNumber = Math.floor((Math.random() *180) + 20);
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is an even number.");
    } else {
        console.log(randomNumber + " is an odd number.");
    }
}





// 4.Create a for loop that uses console.log to create the output shown below.

for(var m = 1; m < 1000000; m+=11){
    console.log("We are currently at " + m);
}

// class code
var str = " "
for(var h = 1; h <= 9; h += 1){
    for(var g =1; g <= h; g += 1){
        str += h;
    }
    str += "\n";
}
console.log(str)



// 5. Create a for loop that uses console.log to create
// the output shown below.

for(var p = 100; p > 0; p-=5) {
    console.log(p)
}

// class code
for (var p = 100; p > 100; p -= 5){
    console.log(p);
}