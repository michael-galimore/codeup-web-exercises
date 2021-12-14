(()=>{

const userLastCommit = (user)=>{
    fetch('https://api.github.com/users'), {headers: {'Authorization': `token ${GITHUB_KEY}`}})
    .then(resp => resp.json())
        .then(data => {
            for (let event of data){
                if (data[index].type === "PushEvent"){
                    console.log(data[index])
            }

            }
        })
}


const wait = ms => new Promise( resolve => {
    setTimeout(resolve,ms);
    });

wait(1000).then(()=> console.log("Your promise resolved after 1 second"))

//Handle An API Promise

// Create a function that accepts a GitHub username, and
// returns a promise that resolves
// returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    fetch('https://api.github.com/users'), {headers: {'Authorization': 'token', GITHUB_KEY}}

function gitUser(username){
    return new Promise((resolve )=> {

    })
}

    //








    // Write a function named wait
// that accepts a number as a parameter, and
// returns a promise that resolves after the passed number of milliseconds

//wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

    // function wait(number){
    //     return new Promise((resolve) =>{
    //         setTimeout(() => {
    //         }, 3000)
    //     })
    // }

    // console.log(wait)



})();