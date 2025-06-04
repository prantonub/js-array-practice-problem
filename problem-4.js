// ### 4. Checking if it's an Array

// Instructions:
// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.
//-------------------------------------------------------------------
const fruits = ['Mango', 'Banana', 'Apple'];
const book = 'JavaScript';
const numbers = [1, 2, 3, 4, 5];
const age = 22;
const emptyList = [];

//Check and print if each variable is an array
console.log(Array.isArray(fruits) ? 'fruits is an array' : 'NOT an array');
console.log(Array.isArray(book) ? 'book is an array' : 'NOT an array');
console.log(Array.isArray(numbers) ? 'numbers is an array' : 'NOT an array');
console.log(Array.isArray(age) ? 'age is an array' : 'NOT an array');
console.log(Array.isArray(emptyList) ? 'emptyList is an array' : 'NOT an array');
