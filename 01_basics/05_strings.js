let repoCount = 10;
let name = "Neel";

console.log(`Hello my name is ${name} and my repo count is: ${repoCount}`);

const game = new String('velorant');

console.log(game[0])
console.log(game.__proto__);
console.log(game.length);

console.log(game.charAt(5));
console.log(game.indexOf('t'));


const newString = game.substring(0,3)
console.log(newString);

const anotherString = game.slice(-7, -4);
console.log(anotherString);

const url = "https://code.com/neel%20parghi"
console.log(url.replace('%20', '-'))

console.log(url.split('/'))