//display
const history=document.querySelector(".history");
const current=document.querySelector(".current");

//buttons
const buttons=document.querySelectorAll("button");//node list of all buttons

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
    if (numTwo==0){//prevents division by zero
        alert("Nice try.");
        return numTwo;
    } 
    else {
        return numOne/numTwo;
    }
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
function clear(){
    oldNum="";
    op="no op";
    newNum="";
    history.textContent="";
    current.textContent="0";
}

btnAC.addEventListener("click",clear);

//delete
btnDel.addEventListener("click",()=>{
    current.textContent=current.textContent.slice(0,-1);//removes last character from string
})

//change sign
btnChangeSign.addEventListener("click",()=>{
    current.textContent=Number(current.textContent)*-1;
})

//numbers
numButtons.forEach(numButton=>{
    numButton.addEventListener("click",()=>{
        if (current.textContent==="0"){
            current.textContent=`${numButtons.indexOf(numButton)}`;
        }
        else{   
            current.textContent+=`${numButtons.indexOf(numButton)}`;
        }
    })
})

//decimal
btnDecimal.addEventListener("click",()=>{
    if (current.textContent!==""&&current.textContent.includes(".")===false){
        current.textContent+=".";
    }
})

//operators
//helper function
function operatorHelper(opSymbol,opType){
    if (current.textContent!==""){//only works if user inputted something     
        newNum=Number(current.textContent);     
        oldNum=Math.round(1000*operate(oldNum,op,newNum))/1000;//rounds answer to 3 decimal places
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
    operatorHelper("÷","divide");
})

//subtract
btnSubtract.addEventListener("click",()=>{
    operatorHelper("-","subtract");
})

//equals
btnEquals.addEventListener("click",()=>{
    if (current.textContent!==""){
        newNum=Number(current.textContent);
        current.textContent=Math.round(1000*operate(oldNum,op,newNum))/1000;//rounds to 3 decimal places
        history.textContent="";
        op="no op";
    }
})

//button highlight effect
buttons.forEach(button=>{
    const originalColor=button.style.backgroundColor;
    button.addEventListener("mouseover",()=>{
        button.style.backgroundColor="#e0ccff";
    })
    button.addEventListener("mouseout",()=>{
        button.style.backgroundColor=originalColor;
    })
})