'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
//let shape3 = shape2.substring(0, 3)

let lineCount: number = 10;
let shape : string = "*";
let shape2 : string = "";

for(let i = 0; i < lineCount ; i++){
    shape2 = " "
    shape = "*"
    
    
    for(let j = lineCount; j > i+1; j--){
        shape2 += " " 
        
    }
    for(let k = 1; k < 1+(2*i) ; k++){
        shape += "*"
        
       
    } 
    console.log(shape2 + shape)
}
