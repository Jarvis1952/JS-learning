// Primitive

// 7 types: String, number, Boolean, Null, undefined, Symbol, BigInt 

// javaScript is Dynamically typed language 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ['IronMan, Thor, Hulk']; 

let myObj = {
    name: "neel",
    age: 23
}

const myfunction = function(){
    console.log("Hello");
}



// --------------------------------------------------------------
// stack(Primitive), Heap(Non-Primitive)

let myValue = 'test'
let myChangedValue = myValue
myChangedValue = 'test2'  

console.log(myValue);
console.log(myChangedValue);

let userOne = {
    email : "userOne@gmail.com",
    id : '1234'
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);