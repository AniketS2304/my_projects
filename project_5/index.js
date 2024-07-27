const display = document.querySelector(".display");
const button = document.querySelector("button");
const btn_container = document.querySelector(".btn-container");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const oprs = ["+", "-", "*", "/", "%"];

let num1 = null;
let num2 = null;
let opr = null;
let isOperatorClicked = false;

btn_container.addEventListener("click", () => {
  // console.log('hi')
  const target = event.target;
  console.log(target);
  const value = target.getAttribute("data-value");
  if (value === "AC") {
    display.innerText = "";
    num1 = null;
    opr = null;
    num2 = null;
    isOperatorClicked = false;
  } else if (numbers.includes(value)) {
    if (isOperatorClicked) {
      num2 = value;

      isOperatorClicked = false;
    }
    display.innerText += numbers.indexOf(value);
  } else if (oprs.includes(value)) {
    num1 = display.innerText;
    if (num1 != null) {
      opr = value;
      display.innerText += value;
      isOperatorClicked = true;
    }
  } else if (value === "=") {
    if (num1 !== null && num2 !== null) {
      const realNum1 = parseFloat(num1);
      const realNum2 = parseFloat(num2);

      switch (opr) {
        case "+":
          display.innerText = (realNum1 + realNum2).toFixed(4);
          break;
        case "-":
          display.innerText = (realNum1 - realNum2).toFixed(4);
          break;
        case "/":
          display.innerText = (realNum1 / realNum2).toFixed(4);
          break;
        case "*":
          display.innerText = (realNum1 * realNum2).toFixed(4);
          break;
      }

      num1 = null;
      num2 = null;
      opr = null;
      isOperatorClicked = false;
    }
  } else if (value == ".") {
    display.innerText += ".";
  }
});
