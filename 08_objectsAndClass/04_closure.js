function outer(){
    let name = 'Sam'
    let name2 = 'Sam2'
    function inner(){
        console.log(name) 
    }
    function callthisMethod(){
        console.log(name2)
    }
    callthisMethod()
    return inner;
}

let innerFunc = outer()
innerFunc()

/* closure is a function that has access to the parent scope, even 
    after the parent funciton has closed */ 