import NumberValidator from "./NumberValidator.js";
import Lotto from "../Lotto.js";

class WinningNumberValidator {
  static DELIMITER = ",";

  static parse(input) {
    this.#validateDelimiter(input);
    const numbers = this.#splitAndTrim(input);
    this.#validateCount(numbers);
    this.#validateNumeric(numbers);
    
    const parsedNumbers = this.#parseToNumbers(numbers);
    this.#validateRange(parsedNumbers);
    this.#validateDuplicate(parsedNumbers);
    
    return parsedNumbers;
  }

  static #validateDelimiter(input) {
    if (!input.includes(WinningNumberValidator.DELIMITER)) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
  }

  static #splitAndTrim(input) {
    return input.split(WinningNumberValidator.DELIMITER).map((number) => number.trim());
  }

  static #validateCount(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  static #validateNumeric(numbers) {
    NumberValidator.validateNumericArray(numbers, "[ERROR] 당첨 번호는 숫자여야 합니다.");
  }

  static #parseToNumbers(numbers) {
    return numbers.map((number) => Number(number));
  }

  static #validateRange(parsedNumbers) {
    NumberValidator.validateRangeArray(parsedNumbers, "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
  }

  static #validateDuplicate(parsedNumbers) {
    NumberValidator.validateDuplicate(parsedNumbers, "[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
  }
}

export default WinningNumberValidator;

