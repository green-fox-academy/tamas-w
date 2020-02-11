let lineCount: number = 8;
let shape :string = ""
let shape2 :string = ""


for(let i = 0; i < lineCount; i++){

    shape = ""
    shape2 = " "
    

    if(i % 2 === 0){
        for(let j = 0; j < lineCount/2; j++){
            shape += " %"
        }
        console.log(shape)
    }
    
    else{
        for(let j = 0; j < lineCount/2; j++){
            shape2 += " %"
        }
        console.log(shape2)
    }
}