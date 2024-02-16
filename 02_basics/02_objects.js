
// singleton object
const user = new Object()

user.id = "123Abc"
user.name = "Neel"
user.isLoggedIn = false


// console.log(user);

const newUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname: {
            firstName: "Neel",
            lastName: "Parghi"
        }
    }
}

console.log((newUser.fullname?.userfullname?.firstName));

const obj1 = {key1 : "a", key2: "b"}
const obj2 = {key3 : "c", key4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

// using spread 
const mergedObj = {...obj1 , ...obj2}


const course = {
     coursename: "JS",
     price: "999",
     courseInstructor: "Neel"
}

const {courseInstructor} = course