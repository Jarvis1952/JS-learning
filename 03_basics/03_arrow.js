const user = {
    username : "Neel",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome!`)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()


function code(){
    // console.log(this)
}
// code()

// Arrow function
const coder = () => {

} 

const addFunc = (num1, num2) =>{
    return num1 + num2;
} 

// if we use { } curly braces, we must write return statement
// if we use () parenthesis, then no need to write return statement

const addMore = (num1, num2) => (num1 + num2)

// Immediately Invoked Function Expression (IIFE)
/* there is a problme due to pollution of global scope, we have thrown it
 to remove the pollution of the variables of global scope and whatever
 declaration is there */

(function IIFE(){
    console.log(`DB Connected One`);
})();

//With Arrow function syntax
( function two() {
    console.log(`DB Connected Two`);
})()



