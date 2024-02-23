//Syntax:

const myPromise = new Promise(function(resolve, reject){

})

// consuming promise using then()

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log(`Async task 1 completed`)
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log(`Promise Consumed`)
})

// another way to consume promise

new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log(`Async task 2 completed`)
        resolve()
    }, 1000)
}).then(function(){
    console.log(`Promise 2 consumed`)
})

// passing values to resolve
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: 'Neel',
            email:'neel@google.com'
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


// Using reject

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: 'Neel',
                email:'neel@google.com'
            })
        }else{
            reject('Error: something went wrong')
        }
    }, 1000);
})

promiseFour.then( (user) => {
    console.log(user)
    return user.username;
}).then((username) => {            // chaining
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( () => {
    console.log(`Promise is either resolved or rejected`)
})

// Using async method to consume promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username: 'Neel',
                email:'neel.parghi@google.com'
            })
        }else{
            reject('Error: something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch (error){
        console.log(error)
    }
}
consumePromiseFive()