let randomNumber = parseInt((Math.random() * 100 + 1))

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelectorO('.guesses');
const remaining = document.querySelectorO('.lastResult');
const lowOrHigh = document.querySelectorO('.lowOrHi');
const startOver = document.querySelectorO('.resultParas');


const p = document.createElement('p')

let prevGuess = []

let numberOfGuesses = 1
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(number){
    if(isNaN(guess)){
        displayMessage('Please enter a valid number');
    }
    else if(number < 1 || number > 100){
        displayMessage('Please enter a number between 1 to 100')
    }else{
        prevGuess.push(number)
        if(numberOfGuesses === 11){
            displayGuess(number)
            displayMessage(`Game Over!, Random Numebr was: ${number}`)
            endGame()
        }else{
            displayGuess(number)
            checkGuess(number)
        }
    }
}

function checkGuess(number){
    if(number === randomNumber){
        displayMessage(`You guessed it right !!!`)
        endGame()
    }
    else if(number < randomNumber){
        displayMessage(`Number is too low`)
    }else if(number > randomNumber){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(number){
    userInput.value = ''
    guessSlot.innerHTML += `${number} `;
    numberOfGuesses++;
    remaining.innerHTML = `${11 - numberOfGuesses }`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = docuemnt.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt((Math.random() * 100 + 1))
        prevGuess = [];
        playGame = true;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numberOfGuesses}`;;   
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
    })
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    p.style.color = 'green';
    startOver.appendChild(p);
    playGame = false;
    newGame() 
}