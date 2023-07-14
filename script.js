//buttons
const btnAc=document.getElementById("ac");
const btnDel=document.getElementById("del");
const btnPercent=document.getElementById("percent");
const btnAdd=document.getElementById("add");
const btnSeven=document.getElementById("7");
const btnEight=document.getElementById("8");
const btnNine=document.getElementById("9");
const btnMultiply=document.getElementById("multiply");
const btnFour=document.getElementById("4");
const btnFive=document.getElementById("5");
const btnSix=document.getElementById("6");
const btnDivide=document.getElementById("divide");
const btnOne=document.getElementById("1");
const btnTwo=document.getElementById("2");
const btnThree=document.getElementById("3");
const btnSubtract=document.getElementById("subtract");
const btnZero=document.getElementById("0");
const btnDecimal=document.getElementById("decimal");
const btnEquals=document.getElementById("equals");

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

