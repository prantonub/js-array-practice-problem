// ### 3. Checking Array Membership with ‘includes’

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

//
const books = ['Bangla', 'English', 'Math', 'Science', 'JavaScript'];
// Check if the array contains a JavaScript book
const hasJavaScriptBook = books.includes('JavaScript');

// Print a message based on the result
if (hasJavaScriptBook) {
  console.log('JavaScript book is available in the list.');
} else {
  console.log('JavaScript book is NOT found in the list.');
}
