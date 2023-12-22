## Write to a file

Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

---------------------------------------appendFile

// Content to write to the file
const content = "Hello, this is a test content to write to a file.\n";

// Write content to a file asynchronously
fs.appendFile("a.txt", content, "utf8", (err) => {
if (err) {
console.error("Error writing to the file:", err);
return;
}
console.log("Content has been written to output.txt");
});

-------------------------------writeFile

// Content to write to the file
const content = "Hello, this is a test content to write to a file.\n";

// Write content to a file asynchronously
fs.writeFile("a.txt", content, "utf8", (err) => {
if (err) {
console.error("Error writing to the file:", err);
return;
}
console.log("Content has been written to output.txt");
});
