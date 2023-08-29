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
      case "/":
        result = prevNum / currentNum;
        break;
      case "×":
        result = prevNum * currentNum;
        break;
      case "*":
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

export default Calculator;
