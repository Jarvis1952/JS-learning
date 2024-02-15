// singleton -> make it from constructor , it is singleton
//Object.create()

// object literals

const mySymbol = Symbol("Key1");

const JsUser = {
    name: "Neel",
    age : 23,
    location: "Gujarat",
    email: "neel@google.com",
    "full name" : "Neel Parghi",
    [mySymbol] : "NewKey"
}

console.log(JsUser.email);
console.log(JsUser["email"]);   // why i have tried accessing email using "" is because if we have property with "" e.g "full name" , we can not access it with dot notation
console.log(JsUser["full name"]); 
console.log(JsUser[mySymbol]); 

JsUser.greeting = function(){
    console.log("Hello user");
}

JsUser.greeting();
Object.freeze(JsUser) // does not reflacts the changes after freeze statement
JsUser.email = "neel@microsoft.com"

console.log(JsUser)
