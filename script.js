let buffer = "0";
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

function handleSymbol(value) {
    if(value === "C") {
        buffer = "0";
    }else if(value === "=") {
        console.log("=");
    }else if(value === "+") {
        console.log("+");
    }else if(value === "-") {
        console.log("-");
    }else if(value === "X") {
        console.log("x");
    }else if(value === "%") {
        console.log("/");
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
