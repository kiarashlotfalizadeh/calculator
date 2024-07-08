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

function operate(num1, num2, symbol) {
  switch(symbol) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "×":
    case "*":
      return multiply(num1, num2);
      break;
    case "÷":
    case "/":
      return divide(num1, num2);
      break;
  }
}

function getFinalResult(loopNum, array) {
  let result = array[0];
  loopNum *= 2;

  for (let i = 2; i <= loopNum; i += 2) {
    result = operate(parseInt(result), parseInt(array[i]), array[i-1]);
  }

  return result.toFixed(2);
}

let input = document.querySelector("#equation");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let equationArr;
let finalResult;

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

equalsButton.addEventListener("click", function() {
  equationArr = input.value.split(/([+\-×÷])/);
  let numberOfLoops = Math.floor(equationArr.length / 2);
  finalResult = getFinalResult(numberOfLoops, equationArr);
  input.value = finalResult;
})

