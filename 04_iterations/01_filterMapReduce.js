// forEach() does not return anything
const myArr = [1, 2, 3, 4, 5, 6, 7]

const foreachValues = myArr.forEach( (item) => {
    return item;
});     // return undefined


const filteredValues = myArr.filter( (value) => {
        return value > 5;
})

console.log(filteredValues)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userBooks = books.filter( (book) =>{
    return book.genre === 'History'
} )

userBooks = books.filter( (book) => {
    return book.publish >= 1995 && book.genre == 'History' 
} )

// console.log(userBooks) 


// map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.map( (num) => num + 10 )
console.log(newNums);

newNums.map( (num) => num * 10 )
        .map( (num) => num + 1 )
        .filter( (num) => num >= 40 )


// reduce
const price = [ 100, 250, 600]

const cart = price.reduce(function (acc, currVal) {
    return acc + currVal;
}, 0)
console.log(`Total:`, cart);

const newCart = [
    {
        itemName : "Python course",
        price : 599
    },
    {
        itemName : "JS course",
        price : 399
    },
    {
        itemName : "Java course",
        price : 499
    },
    {
        itemName : "C++ course",
        price : 299
    }
]

const priceToPay = newCart.reduce( (acc, item) => ( acc + item.price ), 0)
console.log(`Your Total:`, priceToPay)