import Lotto from "../Lotto.js";

class NumberValidator {
  static validateNumeric(value, errorMessage = "[ERROR] 숫자가 아닙니다.") {
    if (value === "" || isNaN(Number(value))) {
      throw new Error(errorMessage);
    }
  }

  static validateNumericArray(values, errorMessage = "[ERROR] 숫자가 아닙니다.") {
    values.forEach((value) => {
      if (value === "" || isNaN(Number(value))) {
        throw new Error(errorMessage);
      }
    });
  }

  static validateRange(number, errorMessage = null) {
    const num = typeof number === "string" ? Number(number) : number;
    if (num < Lotto.MIN_NUMBER || num > Lotto.MAX_NUMBER) {
      const message = errorMessage || `[ERROR] ${Lotto.MIN_NUMBER}부터 ${Lotto.MAX_NUMBER} 사이의 숫자여야 합니다.`;
      throw new Error(message);
    }
  }

  static validateRangeArray(numbers, errorMessage = null) {
    const message = errorMessage || `[ERROR] ${Lotto.MIN_NUMBER}부터 ${Lotto.MAX_NUMBER} 사이의 숫자여야 합니다.`;
    numbers.forEach((number) => {
      this.validateRange(number, message);
    });
  }

  static validateDuplicate(numbers, errorMessage = "[ERROR] 중복된 숫자가 있습니다.") {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(errorMessage);
    }
  }
}

export default NumberValidator;

