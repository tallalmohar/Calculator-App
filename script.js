let buffer = "0";
let runningTotal = 0;
let previousOperator;
const display = document.querySelector(".display-screen");

function rerender(){
    display.innerText = buffer;
}


function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    rerender();
    
}


function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    }else{
        buffer += value;
    }
}
function flushOperation(intBuffer) {
    if(previousOperator === "+") {
        runningTotal += intBuffer;
    }else if(previousOperator === "-") {
        runningTotal -= intBuffer; 
    }else if(previousOperator === "X") {
        runningTotal *= intBuffer;
    }else if(previousOperator === "%") {    
        runningTotal /= intBuffer;
    }
}


function handleMath(value) {
    if(value === "0"){
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "0";
}

function handleSymbol(value) {
    if(value === "C") {
        buffer = "0";
    }else if(value === "=") {
       if(previousOperator === null) {
           return;
       }
         flushOperation(parseInt(buffer));
         buffer = "" + runningTotal;
         runningTotal = 0;
    }else if(value === "+") {
       handleMath(value);
    }else if(value === "-") {
        handleMath(value);
    }else if(value === "X") {
        handleMath(value);
    }else if(value === "%") {
        c=handleMath(value);
    }else if(value === "←") {
        if(buffer.length === 1) {
            buffer = "0";
        }else{
            buffer = buffer.slice(0, buffer.length - 1);
        }
    }
}


function init() {
    document.querySelector(".button-container").addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    });
    rerender();
}
    

init();
