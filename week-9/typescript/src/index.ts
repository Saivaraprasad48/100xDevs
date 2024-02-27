
// initialize the variables with type 
const num: number = 18;
console.log(num);

// Write a function that greets a user given their first name.
function greet(name: string) {
    console.log(name);
}

greet("Sai");


// Write a function that calculates the sum of two functions
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));


// checks the returned value exact type or not 

function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));


// Create a function that takes another function as input, and runs it after 1 second
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})


// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input
// To assign a type to the user object, you can use interfaces
interface User {
	firstName: string;
	lastName?: string; //optional and this not thorugh error
	email: string;
	age: number;
}

function isLegal2(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

isLegal2({
	firstName: "string",
	email: "string",
    age: 20,
})

//  Create a React component that takes todos as an input and renders them

type TodoType = {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return (
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </>
  );
}

// Interfaces have another special property. You can implement interfaces as a class

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}


// Types mainly used for union and intersection
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202


type Employee2 = {
  name: string;
  startDate2: Date;
};

type Manager = {
  name: string;
  department: string;
};

// OR
// type TeamLead = Employee | Manager;

// AND
// type TeamLead = Employee & Manager;

type TeamLead = Employee2 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate2: new Date(),
  department: "Software developer"
};


// Arrays in TS
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

// Example 2 for arrays in

interface User2  {
	firstName: string;
	lastName2: string;
	age: number;
}

function filteredUsers(users: User2[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName2: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName2: "Singh",
    age: 16
    },]));



// enums are allows us to create a human-readable way to represent a set of constant values
enum Direction {
    Up, // 0 
    Down, // 1
    Left, // 2
    Right // 3
}

function doSomething(keyPressed: Direction) {
    if (keyPressed === Direction.Up || keyPressed === Direction.Down) {
        console.log('Up or Down')
    } else {
        console.log('Left or Right')            
    }
}

doSomething(Direction.Up)
doSomething(Direction.Right)


// more common use case

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

import express from "express";
const app = express();

app.get("/", (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
		res.status(ResponseStatus.Success).json({}); 
});

// Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
// const el = getFirstElement<number>([1,2,3,4,5]);
console.log(el.toLowerCase())


// Exports and Imports 
import Calculator from './Calculator';
const calc = new Calculator();
console.log(calc.add(10, 5));