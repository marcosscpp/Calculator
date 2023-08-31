(()=>{"use strict";const e=class{#e;constructor(){this.#e={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"}}#t(e,t){let r,a="",n=e;do{r=n%t,this.#e.hasOwnProperty(r)&&(r=this.#e[r]),n=parseInt(n/t),a+=r}while(n>0);return a=a.split("").reverse().join(""),2===t&&(a=this.#r(a)),a}#r(e){const t=Math.ceil(e.length/4);e=e.padStart(4*t,"0");let r="";for(let t=0;t<e.length;t++)r+=e[t],(t+1)%4==0&&(r+=" ");return r.trimEnd()}toBin(e){return this.#t(e,2)}toOct(e){return this.#t(e,8)}toHex(e){return this.#t(e,16)}};!function(e){const t=document.querySelector("[data-previous-operand]"),r=document.querySelector("[data-current-operand]"),a=document.querySelectorAll("[data-number]"),n=document.querySelectorAll("[data-operation]"),s=document.querySelector("[data-delete]"),i=document.querySelector("[data-all-clear]"),c=document.querySelector("[data-equals]"),o=new e(t,r);a.forEach((e=>{e.addEventListener("click",(()=>{o.appendNum(e.innerText),o.updateDisplay()}))})),n.forEach((e=>{e.addEventListener("click",(()=>{o.choseOperator(e.innerText),o.updateDisplay()}))})),c.addEventListener("click",(()=>{o.calculate(),o.updateDisplay()})),i.addEventListener("click",(()=>{o.clear(),o.updateDisplay()})),s.addEventListener("click",(()=>{o.delete(),o.updateDisplay()}));const d=["1","2","3","4","5","6","7","8","9","0","."],u=["/","*","-","+"];window.addEventListener("keydown",(e=>{d.includes(e.key)?(o.appendNum(e.key),o.updateDisplay()):"Backspace"===e.key?(o.delete(),o.updateDisplay()):u.includes(e.key)?(o.choseOperator(e.key),o.updateDisplay()):"Delete"===e.key&&(o.clear(),o.updateDisplay())}))}(class extends e{constructor(e,t){super(),this.previousOperandDOM=e,this.currentOperandDOM=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand&&(this.currentOperand=this.currentOperand.slice(0,-1))}choseOperator(e){this.currentOperand&&(""!==this.previousOperand&&this.calculate(),this.operator=e,this.previousOperand=this.currentOperand+" "+e,this.currentOperand="")}appendNum(e){this.currentOperand.includes(".")&&"."===e||(this.currentOperand+=e.toString())}calculate(){let e;const t=parseFloat(this.previousOperand),r=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(r)){switch(this.operator){case"÷":case"/":e=t/r;break;case"×":case"*":e=t*r;break;case"-":e=t-r;break;case"+":e=t+r;break;default:return}this.previousOperand=" ",this.currentOperand=e.toString(),this.operation=void 0}}updateDisplay(){this.currentOperandDOM.innerText=this.currentOperand,this.previousOperandDOM.innerText=this.previousOperand,console.log(super.toBin(this.choseOperand))}});const t=document.querySelector(".toggle");!function(e,t){e.addEventListener("click",(()=>{document.documentElement.classList.toggle("light-mode"),"dark_mode"===t.innerText?t.innerText="light_mode":t.innerText="dark_mode"}))}(t,t.firstElementChild)})();