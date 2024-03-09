Before understanding the typescript to understand the Types of languages

# Types of languages

### 1. Strongly typed vs loosely typed

## Strongly typed languages

- Examples - Java, C++, C, Rust
- Benefits -
  Lesser runtime errors
  Stricter codebase
  Easy to catch errors at compile time

### code doesn't work

```bash
#include <iostream>

int main() {
  int number = 10;
  number = "text";
  return 0;
}
```

## Loosely typed languages

- Examples - Python, Javascript, Perl, php
- Benefits
  Easy to write code
  Fast to bootstrap
  Low learning curve

### Code does work

```bash
function main() {
  let number = 10;
  number = "text";
  return number;
}
```

### Typescript was introduced as a new language to add types on top of javascript.

# What is typescript?

## TypeScript is a programming language developed and maintained by Microsoft.

## It is a strict syntactical superset of JavaScript and adds optional static typing to the language.

## It simply adds type safety to our js code.

# This works like this flow --> `TypeScript -- tsc -- JS --> Browser and Nodejs`

# Typescript compiler

## tsc is the official typescript compiler that you can use to convert Typescript code into Javascript

## There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are -

- esbuild
- swc

# To get started with TypeScript

```bash
npm install -g typescript
```

```bash
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```

## create a file and write

```bash
const x: number = 1;
console.log(x);
```

## Running file

```bash
tsc -b
```

# Basic Types in TypeScript

## Typescript provides you some basic types

### number, string, boolean, null, undefined.

# In TS, Main things `Interfaces and Types`

## Interfaces

# To assign a type to the user object, you can use interfaces

```bash
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
    }
```

## What are types?

# Very similar to interfaces , types let you aggregate data together.

```bash
type User = {
	firstName: string;
	lastName: string;
	age: number
}
```

### we can implment classes with interfaces and types not and types only agreegate data with union and intersection.

## Enums

### Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.

### The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

## Generics

### Generics are a language independent concept (exist in C++ as well)

### Generics enable you to create components that work with any data type while still providing compile-time type safety.

# Exporting and importing modules

## TypeScript follows the ES6 module system, using import and export statements to share code between different files. Here's a brief overview of how this works:

```bash
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}
```

```bash
import { add } from "./math"

add(1, 2)
```

### Example

```bash
export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}
```

```bash
import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));
```
