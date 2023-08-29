import Calculator from "./calculator.js";
import toggleInit from "./toggle.js";
import calculatorInit from "./calculator-init.js";

calculatorInit(Calculator);

const toggle = document.querySelector(".toggle");
const toggleBtn = toggle.firstElementChild;
toggleInit(toggle, toggleBtn);
