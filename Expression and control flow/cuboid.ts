'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let lengthCub :number = 10;
let widhtCub : number = 20;
let heightCub : number = 30;

let area :number = 2 * ((lengthCub*widhtCub) + (widhtCub*heightCub) + (heightCub*lengthCub))
let volume : number = lengthCub * widhtCub * heightCub ;

console.log ("Surface Area: " + area +"\n" + "Volume: "+ volume );