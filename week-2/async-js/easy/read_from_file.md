## Reading the contents of a file

Write code to read contents of a file and print it to the console.
You can use the fs library to as a black box, the goal is to understand async tasks.
Try to do an expensive operation below the file read and see how it affects the output.
Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

// Read contents of a file
fs.readFile('a.txt', 'utf8', (err, data) => {
if (err) {
console.error('Error reading the file:', err);
return;
}

console.log('File Contents:', data);

// Simulate an expensive operation (CPU-intensive task)
// Example: Calculating Fibonacci series recursively
const fibonacci = (num) => {
if (num <= 1) {
return num;
}
return fibonacci(num - 1) + fibonacci(num - 2);
};

const expensiveOperationResult = fibonacci(35); // Adjust the number for higher expenses
console.log('Result of expensive operation:', expensiveOperationResult);
});
