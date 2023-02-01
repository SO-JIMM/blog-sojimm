---
title: TypeScript Introduction
date: 2022-10-25T05:07:08.376Z
description: TypeScript Basics and Examples
tag: TypeScript
author: SO-JIMM
---

## What is TypeScript?

- **Strict superset** of JavaScript that adds optional static typing and class-based, object-oriented programming to the language.

## Why TypeScript?

In TypeScript, much like in other programming languages such as Java or C#, we need to declare a **data type** whenever we create a **data structure**.

By declaring its data type, we give the program information to later on evaluate if the values assigned to that data structure match the data types declared or not.

If there's a match, the program runs, and if not, we get an error.

## Types

JavaScript is a dynamically typed language, meaning variables can change type.

```ts
// JavaScript
let foo = "hello"
foo = 55 // foo has changed type from a string to a number - no problem

// TypeScript
let foo = "hello"
foo = 55 // ERROR - foo cannot change from string to number
```

There are different ways to declare types in TypeScript:

### Inference

You don't declare a type at all, but TypeScript infers (guesses) it for you.

Although this is a nice feature that allows you to implement TypeScript without any extra code, it's much more readable and recommended to explicitly declare your types.

```ts
let helloWorld = "Hello World"
helloWorld = 20
// Type 'number' is not assignable to type 'string'.ts(2322)
```

### Declaring

The syntax to declare types is quite simple: you just add a colon and its type to the right of whatever you're declaring.

```ts
let myName: string = "Germán"
myName = 36 // Error: Type 'number' is not assignable to type 'string'.
```

### Interface

When working with objects, we have a different syntax for declaring types which is called an interface.

An interface looks a lot like a JavaScript object – but we use the interface keyword, we don't have an equal sign or commas, and besides each key we have its data type instead of its value.

Later on, we can declare this interface as the data type of any object:

```ts
interface myData {
  name: string
  city: string
  age: number
}

let myData: myData = {
  name: "Germán",
  city: "Buenos Aires",
  age: 29,
}

// Say again I pass the age as a string, I'll get the following error:
let myData: myData = {
  name: "Germán",
  city: "Buenos Aires",
  age: "29", // Output: Type 'string' is not assignable to type 'number'.
}
```

#### Conditionals

If for example I wanted to make a key conditional, allowing it to be present or not, we just need to add a question mark at the end of the key in the interface:

```ts
interface myData {
  name: string
  city: string
  age?: number
}
```

#### Unions

If I want a variable to be able to be assigned more than one different data type, I can declare so by using unions like this:

```ts
interface myData {
  name: string
  city: string
  age: number | string
}

let myData: myData = {
  name: "Germán",
  city: "Buenos Aires",
  age: "29", // I get no error now
}
```

#### Functions

When typing functions, we can type its parameters as well as its return value:

```ts
interface myData {
  name: string
  city: string
  age: number
  printMsg: (message: string) => string
}

let myData: myData = {
  name: "Germán",
  city: "Buenos Aires",
  age: 29,
  printMsg: (message) => message,
}

console.log(myData.printMsg("Hola!"))
```

#### Arrays

```ts
let numbersArray: number[] = [1, 2, 3] // We only accept numbers in this array
let numbersAndStringsArray: (number | string)[] = [1, "two", 3] // Here we accept numbers and strings.
```

##### Tuples

Tuples are arrays with fixed size and types for each position. They can be built like this:

```ts
let skill: [string, number]
skill = ["Programming", 5]
```

## TypeScript's Compiler

The way TypeScript checks the types we've declared is through its compiler.

> A compiler is a program that converts instructions into a machine-code or lower-level form so that they can be read and executed by a computer.

Every time we run our TypeScript file, TypeScript compiles our code and at that point it checks the types. Only if everything is ok does the program run. That's why we can get errors detected prior to program execution.

On the other hand, in JavaScript types are checked at run time. That means types are not checked until the program executes.

Something also important to mention is that TypeScript transpiles code into JavaScript.

> Transpiling is the process of taking source code written in one language and transforming it into another language.

## Arrays

```tsx
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);

// You can use union types to define arrays containing multiple types:
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects

// If you initialise a variable with a value, it's not necessary to explicitly state the type, as TypeScript will infer it:

let person = ['Danny', 1, true]; // This is identical to above example
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects

// There is a special type of array that can be defined in TypeScript: Tuples. A tuple is an array with fixed size and known datatypes. They are stricter than regular arrays.

let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```
