// Functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0){
        alert('Error');
    }
    // return b == 0? undefined: a/b;
    return a/b;
}

function operate(operator, n1, n2){
    if(operator === "+"){
        return add(n1, n2);
    }else if(operator === "-"){
        return subtract(n1, n2);
    }else if(operator === "x"){
        return multiply(n1, n2);
    }else if(operator === "/"){
        return divide(n1, n2);
    }
}

function updateDisplay(type, character){
    if(lastOperator === character && lastOperator ===lastCharacter) return;
    lastCharacter = character;
    if(type === "number"){
        if(lastOperator === "="){
            secondLine = "0";
            previosLine.textContent = "";
            lastOperator = "";
        }
        secondLine = secondLine == "0"? character: secondLine + character;
        currentLine.textContent = secondLine;
    }else if(type === "operator"){
        if(lastOperator === ""){
            a = Number.parseInt(secondLine);
            firstLine = a+"";
            previosLine.textContent = firstLine;
            secondLine = "0";
            lastOperator = character;
            
            // currentLine.textContent = secondLine;
        }else if (lastOperator ==="="){
            firstLine = a+"";
            previosLine.textContent = firstLine;
            secondLine = "0";
            lastOperator = character;
        }
        else{
            b = Number.parseInt(secondLine);
            firstLine += lastOperator+b;
            previosLine.textContent = firstLine;
            ans = Math.round(operate(lastOperator, a, b)*100)/100;
            lastOperator = character;
            a = ans;
            secondLine = "0";
            currentLine.textContent = ""+ans;
        }
        lastOperator = character;
    }else if(type === "answer"){
        if (lastOperator !== "" && lastOperator !== "="){
            b = Number.parseInt(secondLine);
            firstLine += lastOperator+b;
            previosLine.textContent = firstLine;
            ans = Math.round(operate(lastOperator, a, b)*100)/100;
            lastOperator = character;
            firstLine = ans + "";
            a = ans;
            currentLine.textContent = ans + "";
        }
    }else{
        secondLine = "0";
        ans = 0;
        a = 0;
        b = 0;
        lastOperator = "";
        previosLine.textContent = " ";
        currentLine.textContent = secondLine;
    }
}
let firstLine = "";
let secondLine = "0"
let lastOperator = "";
let lastCharacter = "";
let ans = 0;
let a = 0;
let b = 0;
const previosLine = document.querySelector(".previous-line");
const currentLine = document.querySelector(".current-line");
const keys = [...document.querySelectorAll(".key")];
keys.forEach(key => {
    let character = key.textContent;
    let type;
    if (key.classList.contains("number")){
        type = "number";
    }else if (key.classList.contains("operator")){
        type = "operator";
    }else if (key.classList.contains("answer")){
        type = "answer";
    }else if (key.classList.contains("clear")){
        type = "clear";
    }

    key.addEventListener('click', ()=>{
        updateDisplay(type, character);
    });
});