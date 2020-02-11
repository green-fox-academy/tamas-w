let lineCount: number = 7;
let shape : string = "*";
let shape2 : string = "";


for(let i = 0; i < lineCount ; i++){

    shape2 = " "
    shape = "*"

    if (i < Math.round(lineCount/2)){
        for(let j = lineCount; j > i+1; j--){
            shape2 += " " 
        }
        for(let k = 1; k < 1+(2*i) ; k++){
            shape += "*"
        } 
        console.log(shape2 + shape)

    }else {

    shape2 = " "
    shape = ""
    
        for(let j = lineCount + (lineCount-1); j > (2*i) ; j--){
            shape2 += "*" 
        }
        for(let k = 1; k < i+1  ; k++){
        shape += " "
        }
        console.log(shape + shape2)
    }
    
}

