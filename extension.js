let currentInput = ""
let previousInput = ""
let firstNumber = ""
let secondNumber = ""
let operator = ""
let box1 = ""


//below are the functions for the different operators 
function add (a, b){
    return a + b
}

function subtract (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    return a / b
}

//This function picks the right operator to use 
function operate(operator, num1, num2){
if (operator === "-"){
    return subtract(num1, num2)
} else if (operator === "+"){
    return add(num1, num2)
} else if (operator === "/"){
    return divide(num1, num2)
} else if (operator === "x"){
    return multiply(num1, num2)}
}

//grabbing the display
let display = document.querySelector(".display")

//grabbing all the number buttons
let digitButtons = document.querySelectorAll(".digit")


//adding event listeners to each button to be able to display
//the right digits when clicked
digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        displayV(e.target.textContent)
    })
    button.addEventListener("mouseover", () => button.classList.add("orange"))
    button.addEventListener("mouseleave", () => button.classList.remove("orange"))
});

function displayV(number){
    if (currentInput.length >= 11 ) return
    currentInput += number
    display.textContent = currentInput
    if ( operator == "/" && currentInput == "0" ){
         display.textContent = "error!"
    } 
}  

  

// grabbing all the operator buttons
let operatorButtons = document.querySelectorAll(".operator")

//adding an event listener to the buttons 
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        store(e.target.textContent)
    })
    button.addEventListener("mouseover", () => button.classList.add("yellow"))
    button.addEventListener("mouseleave", () => button.classList.remove("yellow"))
})

function store(sign){
    if (operator !== ""){
        equalTO()
    }
    operator = sign
    display.textContent = ""
    display.textContent = currentInput + " " + operator 
    previousInput = currentInput
    currentInput = ""
}

//grabbing the equal to button
const equal = document.querySelector(".equal")

//setting the event listener for the equal to button 
equal.addEventListener("click", equalTO)
equal.addEventListener("mouseover", () => equal.classList.add("yellow"))
equal.addEventListener("mouseleave", () => equal.classList.remove("yellow"))

const clear = document.querySelector(".clear")

clear.addEventListener("click", remove)
clear.addEventListener("mouseover", () => clear.classList.add("red"))
clear.addEventListener("mouseleave", () => clear.classList.remove("red"))


const eject = document.querySelector(".eject")
eject.addEventListener("click", cut)
eject.addEventListener("mouseover", () => eject.classList.add("warning"))
eject.addEventListener("mouseleave", () => eject.classList.remove("warning"))

function cut() {
 let extract = currentInput.length - 1
 let num = currentInput.slice(0, extract)
 currentInput = num
display.textContent = currentInput
}


function remove(){
    currentInput = ""
    display.textContent = 0
    previousInput = ""
}


function equalTO(){
    firstNumber = previousInput
    secondNumber = currentInput
    box1 = 0
    answer = 0
    if (operator === "+") {
       box1 += add(parseFloat(firstNumber), parseFloat(secondNumber))
    } else if (operator === "-") {
        box1 += subtract(parseFloat(firstNumber), parseFloat(secondNumber))
    } else if (operator === "x") {
        box1 += multiply(parseFloat(firstNumber), parseFloat(secondNumber))
    } else if (operator === "/") {
        box1 += divide(parseFloat(firstNumber), parseFloat(secondNumber))
    }
    answer += Math.round(1000*box1)/1000
    display.textContent = answer

    firstNumber = ""
    previousInput = ""
    currentInput = box1
    operator = ""
}

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (e) => {
 decimalPoint(e.target.textContent)
})

function decimalPoint(point) {
    if (currentInput.includes(".")) return
currentInput += point
display.textContent = currentInput
}