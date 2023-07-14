//display
const history=document.querySelector(".history");
const current=document.querySelector(".current");

//buttons
const btnAC=document.getElementById("ac");
const btnDel=document.getElementById("del");

const btnPercent=document.getElementById("percent");
const btnAdd=document.getElementById("add");
const btnMultiply=document.getElementById("multiply");
const btnDivide=document.getElementById("divide");
const btnSubtract=document.getElementById("subtract");
const btnEquals=document.getElementById("equals");
const btnDecimal=document.getElementById("decimal");

const numButtons =[];
for (let i=0;i<=9;i++){
    numButtons[i]=document.getElementById(`${i}`);
}

//operation functions
function add(numOne,numTwo){
    return numOne+numTwo;
}

function subtract(numOne,numTwo){
    return numOne-numTwo;
}

function multiply(numOne,numTwo){
    return numOne*numTwo;
}

function divide(numOne,numTwo){
    return numOne/numTwo;
}

//chooses an operation based on operator passed
function operate(numOne,operator,numTwo) {
    switch(operator){
        case "+":
            return add(numOne,numTwo);
            break;
        case "-":
            return subtract(numOne,numTwo);
            break;
        case "*":
            return multiply(numOne,numTwo);
            break;
        case "/":
            return divide(numOne,numTwo);
            break;
        default:
            console.log("Invalid operator");
    }
}

//event listeners
numButtons.forEach(numButton=>{
    numButton.addEventListener("click",()=>{
        current.textContent+=`${numButtons.indexOf(numButton)}`;
    })
})