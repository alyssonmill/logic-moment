// Exercise 1: Print Numbers
// Write a program that prints the numbers from 1 to 10.

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// Exercise 2: Even or Odd
// Write a program that checks whether a given number is even or odd.

// Example:

// Input: 4
// Output: Even
// Input: 7
// Output: Odd

// let num = prompt("Write a number");

// if (num % 2 === 0) {
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }

// Exercise 3: Simple Addition
// Write a program that asks the user for two numbers and then prints the sum of those numbers.

// Example:

// Input: 3, 5
// Output: 8

// let num1 = Number(prompt("Write a number"));
// let num2 = Number(prompt("Write a number"));

// let result = num1 + num2;

// alert("The sum is: " + result)

// Exercise 4: Print a Word Multiple Times
// Write a program that asks the user for a word and a number, then prints the word that many times.

// Example:

// Input: hello, 3
// Output: hello hello hello

// let userWord = "Hello";
// let userNum = 9;

// for (let i = 0; i < userNum; i++) {
//     console.log(userWord)
// }

// Exercise 5: Count to N
// Write a program that asks the user for a number N and then prints all numbers from 1 to N.

// Example:

// Input: 5
// Output: 1 2 3 4 5

// let userNum = 6;

// console.log("Input: " + userNum)

// for(let i = 1; i <= userNum; i++){
//     console.log("Output: " + i)
// }

let num1 = Number(prompt("Write a number"));
let num2 = Number(prompt("Write a number"));
let num3 = Number(prompt("Write a number"));

let largest = Math.max(num1,num2,num3);

console.log("That is the largest number: " + largest);
