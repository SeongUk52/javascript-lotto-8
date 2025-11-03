import NumberValidator from "./NumberValidator.js";
import Lotto from "../Lotto.js";

class WinningNumberValidator {
  static DELIMITER = ",";

  static parse(input) {
    if (!input.includes(WinningNumberValidator.DELIMITER)) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
    
    const numbers = input.split(WinningNumberValidator.DELIMITER).map((number) => number.trim());
    this.#validateCount(numbers);
    NumberValidator.validateNumericArray(numbers, "[ERROR] 당첨 번호는 숫자여야 합니다.");
    
    const parsedNumbers = numbers.map((number) => Number(number));
    NumberValidator.validateRangeArray(parsedNumbers, "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    NumberValidator.validateDuplicate(parsedNumbers, "[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    
    return parsedNumbers;
  }

  static #validateCount(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }
}

export default WinningNumberValidator;

