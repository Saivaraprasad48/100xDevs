let fName = "sai"; // string
let lName = "prasad";
let age = 20; // number
let isGraduated = false; // boolean

console.log("The person first name " + fName + " second name " + lName);
console.log("The person is " + fName + " " + lName + " age " + age);

// conditions
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// loops
for (let i = 1; i <= age; i++) {
  console.log(i);
}

// arrays
const arr = [10, 23, 30, 47, 50, 69];
let arrayLength = arr.length - 1;
for (let i = 0; i <= arrayLength; i++) {
  console.log(arr[i]);
}

// objects
let users = [
  {
    name: "raj",
    age: 20,
    gender: "male",
  },
  {
    name: "sneha",
    age: 23,
    gender: "female",
  },
  {
    name: "sai",
    age: 27,
    gender: "male",
  },
  {
    name: "hema",
    age: 29,
    gender: "female",
    address: [
      {
        hNo: 20,
        city: "HYD",
        state: "TELANGANA",
      },
    ],
  },
];

for (let i = 0; i <= users.length - 1; i++) {
  console.log(users[i]["name"]);
}

// problems
// 1) log the persons based on gender as a male
for (let i = 0; i <= users.length - 1; i++) {
  if (users[i]["gender"] === "male") {
    console.log(users[i]["name"]);
  }
}

// 2) log (0-100) using loops
for (let i = 1; i < 101; i++) {
  console.log(i * 10);
}

// 3) log all even numbers in array
for (let i = 0; i < arrayLength; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

// 4) reverse all the elements in array
for (let i = arrayLength; i >= 0; i--) {
  console.log(arr[i]);
}

// functions

function sum(a, b) {
  return a + b;
}

console.log(sum(45, 56));

// callback funcs
function calculateArt(a, b, type) {
  if (type === "sum") {
    return a + b;
  } else if (type === "minus") {
    return a - b;
  }
}

console.log(calculateArt(2, 3, "sum"));
console.log(calculateArt(30, 20, "minus"));

// more callbacks

function sumAdd(a, b, fnToCall) {
  const val = a + b;
  fnToCall(val);
}

function displayResult(data) {
  console.log("The Result is " + data);
}
function displayPassive(data) {
  console.log("The Sum of result is " + data);
}

const ans = sumAdd(1, 2, displayPassive);

// setTimeout, setInterval

function greet() {
  console.log("Hello world");
}

setTimeout(greet, 1 * 1000);
const callGreet = setInterval(greet, 3 * 1000);

function clearIntern() {
  clearInterval(callGreet);
}

// clearing the interval after 10seconds
setTimeout(clearIntern, 10 * 1000);
