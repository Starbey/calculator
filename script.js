//display
const history=document.querySelector(".history");
const current=document.querySelector(".current");

//buttons
const btnAC=document.getElementById("ac");
const btnDel=document.getElementById("del");

const btnChangeSign=document.getElementById("change-sign");

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

//variables
let oldNum="";
let op="no op";
let newNum;

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
        case "add":
            return add(numOne,numTwo);
            break;
        case "subtract":
            return subtract(numOne,numTwo);
            break;
        case "multiply":
            return multiply(numOne,numTwo);
            break;
        case "divide":
            return divide(numOne,numTwo);
            break;
        case "no op"://If no operator was selected (i.e. only 1 number
                //was inputted), store the new num in the old num var.
            return numTwo;
            break;
        default:
            console.log("Invalid operator");
    }
}

//event listeners
//clear
btnAC.addEventListener("click",()=>{
    oldNum="";
    op="no op";
    newNum="";
    history.textContent="";
    current.textContent="";
})

//numbers
numButtons.forEach(numButton=>{
    numButton.addEventListener("click",()=>{
        current.textContent+=`${numButtons.indexOf(numButton)}`;
    })
})

//operators
//helper function
function operatorHelper(opSymbol,opType){
    if (current.textContent!==""){//only works if user inputted something
        newNum=Number(current.textContent);
        oldNum=operate(oldNum,op,newNum);
        current.textContent="";
        history.textContent=`${oldNum} ${opSymbol}`;//updates history
        op=opType;
    }
}

//add
btnAdd.addEventListener("click",()=>{
    operatorHelper("+","add");
})

//multiply
btnMultiply.addEventListener("click",()=>{
    operatorHelper("x","multiply");
})

//divide
btnDivide.addEventListener("click",()=>{
    operatorHelper("/","divide");
})

//subtract
btnSubtract.addEventListener("click",()=>{
    operatorHelper("-","subtract");
})

//equals
btnEquals.addEventListener("click",()=>{
    newNum=Number(current.textContent);
    current.textContent=operate(oldNum,op,newNum);
    op="no op";
})