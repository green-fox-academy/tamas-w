'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let inputNum : number = 5;
let sum : number = 0;
for(let i = 0; i <= inputNum; i++){
    sum += i
}
console.log("Sum: " + sum + ", Average: " + sum/inputNum)