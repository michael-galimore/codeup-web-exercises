
// var i = Math.pow(2,1)
// while (i < 65539) {
//     console.log(i);
//     i *=2
// }

// class code
// var multipliedNum = 2
//
// while(multipledNum <= 65536){
//     console.log(multipliedNum);
//     multipliedNum *= 2
// }

// I was not able to attempt this one.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Opening up shop! I've got " + allCones + " cones to sell!")
do {
// This expression will generate a random number between 1 and 5
    var conesToBuy = Math.floor(Math.random() * 5) + 1;
    if (conesToBuy <= allCones) {
        allCones = -= conesToBuy;
        console.log("Customer wants to buy " + conesToBuy + " cones. I have " + allCones + "cones left in stock.")
    } else {
        console.log("Sorry pal, We can't sell you " + conesToBuy + " ")
    }
} while (allCones !== 0);
    console.log("Closing up shop!")