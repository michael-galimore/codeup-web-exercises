"use strict";
$(document).ready(() => {


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let lang = users.filter(user => user.languages.length >= 3)
    console.log(lang)

// Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map(user => user.email)
    console.log(userEmail)

//    Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const total = users.reduce((total, user) => {
    return total + user.yearsOfExperience / 2;
}, 0);
console.log(total)
let avgExp = total/users.yearsOfExperience;
    console.log(avgExp)


//    Use .reduce to get the longest email from the list of users.
//
const long = users.reduce((emails,users) => {
    if(users.length > emails.length){
        emails.push(users.email.length)

    }
    return users.email + " has the longest email";
},[])
console.log(long)

//    code used in class

    let longestEmail = users.reduce((startLength, addLetter) => {
        if(startLength.email.length > addLetter.email.length){
            return startLength;
        } else {
            return addLetter;
        }
    })
//    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
// Did not get this far. code used in class
    let instructors = users.reduce((finalString, user, index) => {
       if(index === users.length -1){
           return`${finalString} ${user.name}.`
    } else {
           return`${finalString} ${user.name},`
       }
    }, "Your instructors are:")
    console.log(instructors)



})