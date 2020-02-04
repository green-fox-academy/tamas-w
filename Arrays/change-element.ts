// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

const numList = [1, 2, 3, 8, 5, 6];

const nums = numList.map(change =>
{
    numList [3] = numList[2]+ numList[0];
    return change
    })
    



    /*
function asd(){
    let a = numList[3]
    a - 4 ;
    console.log(a)
};
*/
console.log(numList[3])