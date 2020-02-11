
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let shape :string = ""
let shape2 :string = ""
let shape3 :string = ""

for(let i = 0; i < lineCount; i++){

    shape = "%"
    shape2 = ""
    shape3 = ""

    if(i === 0){
        for(let j = 0; j < lineCount-1; j++){
            shape += "%"
        }
    }
    else if( i === lineCount-1){
        for(let k = 0; k < lineCount-1; k++){
            shape += "%"
        }
    }
    else{
        for(let l = 0; l < i-1; l++){
            shape2 += " "
        }
        shape2 += "%"

        for(let m = lineCount -3; m > i-1; m--){
            shape3 += " "
        }
        shape3+= "%"
    }

    console.log(shape + shape2 + shape3)

}