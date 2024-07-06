function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(num1, num2, symbol) {
  switch(symbol) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "&times;":
      multiply(num1, num2);
      break;
    case "&divide;":
      divide(num1, num2);
      break;
  }
}

let input = document.querySelector("#equation");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");

for (let button of numberButtons) {
  button.addEventListener("click", function() {
    input.value += this.textContent;
  })
}

for (let button of operatorButtons) {
  button.addEventListener("click", function() {
    input.value += this.textContent;
  })
}

clearButton.addEventListener("click", function() {
  input.value = "";
})

let equation = input.value;
