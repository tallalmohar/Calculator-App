
function buttonClick(value) {
    if(isNaN(value)){
        buttonWasOp(value);
    }
    else{
        buttonWasNum(value);
    }
}

function buttonWasNum(value){
    console.log("value is a number");
}

function buttonWasOp(value){
    console.log("value is an operator");
}





function init(){
   document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
});
}
init();
