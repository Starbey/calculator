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
let input=""
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
    input="";
    oldNum="";
    op="no op";
    newNum="";
    history.textContent="";
    current.textContent=input;
})

//numbers
numButtons.forEach(numButton=>{
    numButton.addEventListener("click",()=>{
        // input+=`${numButtons.indexOf(numButton)}`;
        // current.textContent=input;

        current.textContent+=`${numButtons.indexOf(numButton)}`;
        input=current.textContent;
    })
})

//operators
function operaterHelper(opSymbol){
    if (input!==""){//only works if user inputted something
        newNum=parseInt(input);
        input="";
        oldNum=operate(oldNum,op,newNum);
        console.log(oldNum);//delete later
        current.textContent=input;
        history.textContent=`${oldNum} ${opSymbol}`;//updates history
        op="add";
    }
}

btnAdd.addEventListener("click",()=>{
    if (input!==""){//only works if user inputted something
        newNum=parseInt(input);
        input="";
        oldNum=operate(oldNum,op,newNum);
        console.log(oldNum);//delete later
        current.textContent=input;
        history.textContent=`${oldNum} +`;//updates history
        op="add";
    }
})

btnMultiply.addEventListener("click",()=>{
    if (input!==""){//only works if user inputted something
        newNum=parseInt(input);
        input="";
        oldNum=operate(oldNum,op,newNum);
        console.log(oldNum);//delete later
        current.textContent=input;
        history.textContent=`${oldNum} x`;//updates history
        op="multiply";
    }
})

btnDivide.addEventListener("click",()=>{
    if (input!==""){//only works if user inputted something
        newNum=parseInt(input);
        input="";
        oldNum=operate(oldNum,op,newNum);
        console.log(oldNum);//delete later
        current.textContent=input;
        history.textContent=`${oldNum} ÷`;//updates history
        op="divide";
    }
})

btnSubtract.addEventListener("click",()=>{
    if (input!==""){//only works if user inputted something
        newNum=parseInt(input);
        input="";
        oldNum=operate(oldNum,op,newNum);
        console.log(oldNum);//delete later
        current.textContent=input;
        history.textContent=`${oldNum} -`;//updates history
        op="subtract";
    }
})