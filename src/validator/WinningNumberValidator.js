import NumberValidator from "./NumberValidator.js";
import Lotto from "../Lotto.js";
import ErrorMessage from "../constants/ErrorMessage.js";

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
      throw new Error(ErrorMessage.WINNING_NUMBER_DELIMITER);
    }
  }

  static #splitAndTrim(input) {
    return input.split(WinningNumberValidator.DELIMITER).map((number) => number.trim());
  }

  static #validateCount(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error(ErrorMessage.WINNING_NUMBER_COUNT(Lotto.NUMBER_COUNT));
    }
  }

  static #validateNumeric(numbers) {
    NumberValidator.validateNumericArray(numbers, ErrorMessage.WINNING_NUMBER_NOT_NUMERIC);
  }

  static #parseToNumbers(numbers) {
    return numbers.map((number) => Number(number));
  }

  static #validateRange(parsedNumbers) {
    NumberValidator.validateRangeArray(parsedNumbers, ErrorMessage.WINNING_NUMBER_RANGE(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER));
  }

  static #validateDuplicate(parsedNumbers) {
    NumberValidator.validateDuplicate(parsedNumbers, ErrorMessage.WINNING_NUMBER_DUPLICATE);
  }
}

export default WinningNumberValidator;

