function setUserName(username){
    this.username = username
    console.log(`called`)
}

function createUser(username, email, password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

// another way, if we dont use call()

function createUser(username, email, password){
    this.username = setUserName(username)
    this.email = email
    this.password = password
}

const user = new createUser('sam', 'sam@gmail.com', '1234')
console.log(user);