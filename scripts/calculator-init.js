function calculatorInit(Calculator) {

  // Input Map
  const dataPreviousOperand = document.querySelector("[data-previous-operand]");
  const dataCurrentOperand = document.querySelector("[data-current-operand]");
  const numberButtons = document.querySelectorAll("[data-number]");
  const operationButtons = document.querySelectorAll("[data-operation]");
  const deleteButton = document.querySelector("[data-delete]");
  const allClearButton = document.querySelector("[data-all-clear]");
  const equalButton = document.querySelector("[data-equals]");


  const calculadora = new Calculator(dataPreviousOperand, dataCurrentOperand);

  // Adding numbers button functions
  numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculadora.appendNum(btn.innerText);
      calculadora.updateDisplay();
    });
  });

  // Adding operation button functions
  operationButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      calculadora.choseOperator(btn.innerText);
      calculadora.updateDisplay();
    });
  });

  // Adding equal button function
  equalButton.addEventListener("click", () => {
    calculadora.calculate();
    calculadora.updateDisplay();
  });

  // Adding All Clear button function
  allClearButton.addEventListener("click", () => {
    calculadora.clear();
    calculadora.updateDisplay();
  });

  // Adding delete button function
  deleteButton.addEventListener("click", () => {
    calculadora.delete();
    calculadora.updateDisplay();
  });

  const numbersKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const operationKeys = ["/", "*", "-", "+"];

  // Adding key iteractions for the calculator
  window.addEventListener("keydown", (e) => {
    if (numbersKeys.includes(e.key)) {
      calculadora.appendNum(e.key);
      calculadora.updateDisplay();
    } else if (e.key === "Backspace") {
      calculadora.delete();
      calculadora.updateDisplay();
    } else if (operationKeys.includes(e.key)) {
      calculadora.choseOperator(e.key);
      calculadora.updateDisplay();
    } else if (e.key === "Delete") {
      calculadora.clear();
      calculadora.updateDisplay();
    }
  });
}

export default calculatorInit;
