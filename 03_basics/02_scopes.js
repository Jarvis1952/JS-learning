function outer(){
    const userName = "Neel"

    function inner(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website) // error
    inner()
}

outer()


addOne(5) // can call normal function before initialization
//addTow(5) // error, can not call function expression before initialization

function addOne(number){
    console.log(number + 1);
}

const addTow = function (number){
    console.log(number + 2);
}

addTow(5)