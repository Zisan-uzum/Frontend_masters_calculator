let total = 0;
let buffer = "0";
const answer = document.querySelector(".screen");




init();

function init(){
    document.querySelector(".rows").addEventListener("click", function(event){ 
        buttonClick(event.target.innerText); 
        }
     );
}

function buttonClick(val){
    if(isNaN(parseInt(val))){
        Character(val);
    }else{

        NumberChar(val);
    }
    answer.innerText = buffer;

}

function Character(val){
    switch(val){
        case "C": 
        buffer = "0";
        total = 0;
        break;
        case "←":
        if(buffer.length === 1){
            buffer="0";
        }else{
            buffer = buffer.substring(0, buffer.length-1);
        }
        break;
        default:
        mathOperation(val);
    }
}

function NumberChar(val){
    if(buffer=== "0"){
        console.log("buffer is " + buffer+ " value is "+ val);
        buffer = val;
    }else{
        buffer += val;
    }
}