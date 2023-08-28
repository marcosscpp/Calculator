const dataPreviousOperand = document.querySelector("[data-previous-operand]");
const dataCurrentOperand = document.querySelector("[data-current-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const equalButton = document.querySelector("[data-equals]");

class Calculator {
  constructor(previousOperandDOM, currentOperandDOM) {
    this.previousOperandDOM = previousOperandDOM;
    this.currentOperandDOM = currentOperandDOM;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    if (this.currentOperand) {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }

  choseOperator(operator) {
    if (this.currentOperand) {
      if (this.previousOperand !== "") this.calculate();
      this.operator = operator;
      this.previousOperand = this.currentOperand + " " + operator;
      this.currentOperand = "";
    }
  }

  appendNum(num) {
    if (this.currentOperand.includes(".") && num === ".") {
      return;
    }
    this.currentOperand += num.toString();
  }

  calculate() {
    let result;
    const prevNum = parseFloat(this.previousOperand);
    const currentNum = parseFloat(this.currentOperand);
    if (isNaN(prevNum) || isNaN(currentNum)) return;
    switch (this.operator) {
      case "÷":
        result = prevNum / currentNum;
        break;
      case "×":
        result = prevNum * currentNum;
        break;
      case "-":
        result = prevNum - currentNum;
        break;
      case "+":
        result = prevNum + currentNum;
        break;
      default:
        return;
    }
    this.previousOperand = " ";
    this.currentOperand = result.toString();
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentOperandDOM.innerText = this.currentOperand;
    this.previousOperandDOM.innerText = this.previousOperand;
  }
}

const calculadora = new Calculator(dataPreviousOperand, dataCurrentOperand);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculadora.appendNum(btn.innerText);
    calculadora.updateDisplay();
  });
});

operationButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculadora.choseOperator(btn.innerText);
    calculadora.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculadora.calculate();
  calculadora.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculadora.clear();
  calculadora.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculadora.delete();
  calculadora.updateDisplay();
});

const toggle = document.querySelector(".toggle");
const toggleBtn = toggle.firstElementChild;

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle('light-mode')
  toggleBtn.classList.toggle("light");
  toggleBtn.classList.toggle("dark");
  if (toggleBtn.innerText === "dark_mode") {
    toggleBtn.innerText = "light_mode";
  } else {
    toggleBtn.innerText = "dark_mode";
  }
});
