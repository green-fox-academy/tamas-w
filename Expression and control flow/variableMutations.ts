let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)

if (h % 11 === 0){
    console.log('Oszthato')
}
else{
    console.log('Nem oszthato')
}


let j: number = 5;
// tell if j is divisible by 3 or 5 (as a boolean)

let a = j % 3 === 0
let b = j % 5 === 0

if(a && !b || !a && b){
    console.log('Valamelyikkel oszthato')
}


/*
else if(a && !b){
    console.log('Csak hárommal')
}
else if (!a && b){
    console.log('Csak öttel')
}else{
    console.log('nem oszthato')
}

*/