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

// let num = prompt("Insert a number");

let num = 4;
let result = num / 2;

if (num % 2) {
    console.log("Input" + "-" + num);
    console.log("Output" + "-" + "Even")
}else{
    console.log("Input" + "-" + num);
    console.log("Output" + "-" + "Odd")
}