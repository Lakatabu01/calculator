let displayStorage = ""
let displayStorage2 = ""
let firstNumber = ""
let secondNumber = ""
let operator = ""

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
const para1 = document.createElement("p")

//grabbing all the number buttons
let digitButtons = document.querySelectorAll(".digit")


//adding event listeners to each button to be able to display
//the right digits when clicked
digitButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (operator === "+" || operator === "-" || operator === "/" || operator === "x"){
            secondDigits(e.target.textContent)
        } else {
        displayV(e.target.textContent)
        }
    })
});

function displayV(number){
    displayStorage += number
    para1.textContent = displayStorage
    display.appendChild(para1)
    }  

   function secondDigits(number){
        displayStorage2 += number
        secondNumber = displayStorage2
        para1.textContent = displayStorage + operator + displayStorage2

    }

// grabbing all the operator buttons
let operatorButtons = document.querySelectorAll(".operator")

//adding an event listener to the buttons 
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        store(e.target.textContent)
    })
})

function store(sign){
    operator += sign
    firstNumber = displayStorage
}





