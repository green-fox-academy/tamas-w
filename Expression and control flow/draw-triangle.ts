'use strict';

let lineCount: number = 4;
let shape : string = "";

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for(let i = 0; i < lineCount; i++){
    shape += "*"
    console.log(shape)
    
}