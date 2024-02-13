console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// the reason is that an en equality check == and comparisons > < >= <= works differently 
// Comparisons convert null to a number, treating it as 0 thats why null >= 0 is true and null > 0 is false

// === strict check, check data types as well