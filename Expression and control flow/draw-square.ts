'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let shape :string = ""
let shape2 :string = ""

for(let i = 0; i < lineCount; i++){

    shape = "%"
    shape2 = ""

    if(i === 0){
        for(let j = 0; j < lineCount-2; j++){
            shape += "%"
        }
    }

    else if( i === lineCount-1){
        for(let j = 0; j < lineCount-2; j++){
            shape += "%"
        }
    }

    else{
        shape = "%"
        for(let j = 0; j < lineCount -2; j++){
            shape2 += " "
        }
    }

    console.log(shape + shape2 + "%")

}