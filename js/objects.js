(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Mike",
        lastName: "G",
    }
console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName;
    }
console.log(person.sayHello())


    // let discount;
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // I got Cameron to log but NaN for the others.
function offer(arr) {
arr.forEach(function(shopper){
       if(shopper.amount > 200){
           console.log(shopper.name + "'s total was " + shopper.amount + ". " + shopper.name + "'s discount amount is " + (shopper.amount * .12) + "Their total with today's discount is " + shopper.amount - (shopper.amount * .12))
       } else {
           console.log(shopper.name + " only spent " + shopper.amount + " which does not qualify for today's discount.");
       }
})
};
console.log(offer(shoppers))




    // //code used in class
    // function displayShopperAmount(arr){
    //     arr.forEach(function(shopper){
    //         if(shopper.amount > 200){
    //             console.log(shopper.name + ": spent " + shopper.amount + " Which applies for discount. Discount amount: " + (shopper.amount * .12) + "The discounted price is: " + shopper.amount - (shopper.amount * .12))
    //         } else {
    //             console.log(shopper.name + ": spent " + shopper.amount + " Which does not apply for discount.")
    //         }
    //     })
    // }
    // console.log(displayShopperAmount(shoppers))




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var book1 = {
    title: "Angelmaker",
        author: {
        firstName: "Nick ",
            lastName:"Harkway"
        },
}
var book2 = {
    title: "Anabel",
    author: {
        firstName: "Kathleen ",
        lastName: "Winter"
    },
}
var book3 = {
        title:"Beloved",
    author: {
            firstName: "Toni ",
        lastName:"Morrison",
    }
}
var book4 ={
    title: "Speak",
    author: {
        firstName: "Laurie ",
        lastName:"Anderson",
    },
}
var book5 = {
    title: "Caraval",
    author: {
        firstName: "Stephanie",
        lastName: "Garber",
    },
}
var books = [book1, book2, book3, book4, book5]


console.log(books[4].title)
console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var b = 0
    for (var b = 0; b < books.length; b++) {
        console.log(books);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // I did not do this.
//     var library = []
//     function createBook(title, author){
//         //expected input: "firstName lastName"
//         var namesArray = author.split(" ");
//         var book = {
//             title: title;
//             author: {
//                 firstName: namesArray[0],
//                 lastName: namesArray[1],
//             }
//         }
//         return library.push(book);
//     }
// createBook("1984","George Orwell")
// createBook("Angelmaker", "Nick Harkway")
// createBook("Beloved", "Toni Morrison")





// function showBookInfo(array){
//     for(var j = 0; j < books.length; j++) {
//         console.log("Book number " + (j + 1) + "\nTitle: " + books[j].title + "\nAuthor: " + books[j].author.firstName + " " + books[j].author.lastName)
//
// }
//     showBookInfo(library)
})();
