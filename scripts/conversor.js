class Conversor {
  #hexValues;
  constructor() {
    this.#hexValues = {
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F",
    };
  }

  #convertTo(dec, base) {
    let result = "";
    let quotient = dec;
    let remainder;

    do {
      remainder = quotient % base;
      if (this.#hexValues.hasOwnProperty(remainder)) {
        remainder = this.#hexValues[remainder];
      }
      quotient = parseInt(quotient / base);
      result += remainder;
    } while (quotient > 0);

    result = result.split("").reverse().join("");

    if (base === 2) {
      result = this.#formatNum(result);
    }

    return result;
  }

  #formatNum(num) {
    const resultDigitsAmount = Math.ceil(num.length / 4);
    num = num.padStart(resultDigitsAmount * 4, "0");

    let fomated = "";
    for (let i = 0; i < num.length; i++) {
      fomated += num[i];
      if ((i + 1) % 4 === 0) {
        fomated += " ";
      }
    }
    return fomated.trimEnd();
  }

  toBin(num) {
    return this.#convertTo(num, 2);
  }
  toOct(num) {
    return this.#convertTo(num, 8);
  }
  toHex(num) {
    return this.#convertTo(num, 16);
  }
}

export default Conversor;
