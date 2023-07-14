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

// const btnSeven=document.getElementById("7");
// const btnEight=document.getElementById("8");
// const btnNine=document.getElementById("9");
// const btnFour=document.getElementById("4");
// const btnFive=document.getElementById("5");
// const btnSix=document.getElementById("6");
// const btnOne=document.getElementById("1");
// const btnTwo=document.getElementById("2");
// const btnThree=document.getElementById("3");
// const btnZero=document.getElementById("0");

const numButtons =[];
for (let i=0;i<9;i++){
    numButtons[i]=document.getElementById(`${i}`);
}

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



