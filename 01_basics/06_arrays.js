const myArr = [0,1,2,3,4]
const myHeros = ["ironman", "thor", "hulk"]

// Array methods

myArr.push(5) // 0,1,2,3,4,5

myArr.unshift(6) // 6,0,1,2,3,4,5

myArr.shift() // 0,1,2,3,4,5

myArr.includes(9) // false
myArr.indexOf(9) // -1

const newArr = myArr.join() // it will convert to string

//console.log(typeof newArr);

// Slice and Splice

// Slice: does not manipulate original array

const myArr1 = myArr.slice(1,3);
//console.log(myArr);     // [ 0, 1, 2, 3, 4, 5 ]
//console.log(myArr1);    // [1, 2]

const myArr2 = myArr.splice(1,3);
//console.log(myArr);     // [ 0, 4, 5 ]
//console.log(myArr2);    // [ 1, 2, 3 ]

const marvel = ["thor", "Hulk", "Spiderman" ]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc) // it will add entire dc array inside marvel

console.log(marvel.concat(dc)) // correct way // [ 'thor', 'Hulk', 'Spiderman', 'superman', 'flash', 'batman' ]

// spread function

const herosAssemble = [...marvel, ...dc];
console.log(herosAssemble) // [ 'thor', 'Hulk', 'Spiderman', 'superman', 'flash', 'batman' ]

console.log(Array.isArray("Neel"));
console.log(Array.from("Neel"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));