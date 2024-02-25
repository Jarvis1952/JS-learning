class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherOne = new Teacher('Sam', 'sam@gmail.com','12345')

teacherOne.logMe()
const userOne = new User("James")

userOne.logMe()
