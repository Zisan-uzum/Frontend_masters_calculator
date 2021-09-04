let total = 0;
let buffer = "0";
let previous_operation  = null;
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
        handle_symbol(val);
    }else{

        handle_number(val);
    }
    answer.innerText = buffer;

}

function handle_symbol(val){
    switch(val){
        case "C": 
            buffer = "0";
            total = 0;
            previous_operation = null;
            break;
        case "=":
            if(previous_operation === null){
                return;
            }else{
                do_operation(parseInt(buffer)); /* change total in this function*/
                previous_operation = null;
                buffer = "" + total;
                total = 0;
                break;
            }
        case "←":
            if(buffer.length === 1){
                buffer="0";
            }else{
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        default:
            previous_operation = val;
            do_math(val);
            break;
        
    }
}

function handle_number(val){
    if(buffer=== "0"){
        console.log("buffer is " + buffer+ " value is "+ val);
        buffer = val;
    }else{
        buffer += val;
    }
}

function do_operation(number){
    switch(previous_operation){
        case "+":
            total += number;
            break;
        case "-":
            total -= number;
            break;
        case "÷":
            total /= number;
            break;
        case "*":
            total *= number;
            break;
    }

}
function do_math(val){ /* val is symbol*/
    if(buffer==="0"){
        return null;
    }else{
        const number = parseInt(buffer);
        if(total===0){
            total = number;
        }else{
            do_operation(number);
        }
        previous_operation = val;
        buffer = "0";
    }
    
}