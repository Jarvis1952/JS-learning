// function sayMyName(){
//     console.log("Hey Neel");
// }

// sayMyName()


function addTwoNumbers(number1, number2){
    if(typeof(number1) === 'number' && typeof(number2) === 'number'){
        return number1 + number2;
    }
    else {
        return "Provide only Numbers";
    }
}

const result = addTwoNumbers(70, 30);

console.log(result);

function loginUserMessage(userName){
    if(!userName){
        console.log("Please Enter a userName");
        return;
    }
    return `${userName} Just Logged in`;
}

const resultMessage = loginUserMessage("Neel");
console.log(resultMessage);

// rest operator 
function calculateCartPrice(...amount){
    return amount;
}

console.log(calculateCartPrice(200, 500, 700)); // [ 200, 500, 700 ]

const myNewArray = [200, 500, 400, 800];

function returnThirdValue(getArray){
    return getArray[2];
}

console.log(returnThirdValue(myNewArray))