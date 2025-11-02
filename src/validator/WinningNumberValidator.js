import NumberValidator from "./NumberValidator.js";

class WinningNumberValidator {
  static parse(input) {
    if (!input.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
    
    const numbers = input.split(",").map((number) => number.trim());
    this.#validateCount(numbers);
    NumberValidator.validateNumericArray(numbers, "[ERROR] 당첨 번호는 숫자여야 합니다.");
    
    const parsedNumbers = numbers.map((number) => Number(number));
    NumberValidator.validateRangeArray(parsedNumbers, "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    NumberValidator.validateDuplicate(parsedNumbers, "[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    
    return parsedNumbers;
  }

  static #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }
}

export default WinningNumberValidator;

