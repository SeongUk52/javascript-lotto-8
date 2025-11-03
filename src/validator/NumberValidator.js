import Lotto from "../Lotto.js";
import ErrorMessage from "../constants/ErrorMessage.js";

class NumberValidator {
  static validateNumeric(value, errorMessage = ErrorMessage.NOT_NUMERIC) {
    if (value === "" || isNaN(Number(value))) {
      throw new Error(errorMessage);
    }
  }

  static validateNumericArray(values, errorMessage = ErrorMessage.NOT_NUMERIC) {
    values.forEach((value) => {
      if (value === "" || isNaN(Number(value))) {
        throw new Error(errorMessage);
      }
    });
  }

  static validateRange(number, errorMessage = null) {
    const num = typeof number === "string" ? Number(number) : number;
    if (num < Lotto.MIN_NUMBER || num > Lotto.MAX_NUMBER) {
      const message = errorMessage || ErrorMessage.RANGE_DEFAULT(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER);
      throw new Error(message);
    }
  }

  static validateRangeArray(numbers, errorMessage = null) {
    const message = errorMessage || ErrorMessage.RANGE_DEFAULT(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER);
    numbers.forEach((number) => {
      this.validateRange(number, message);
    });
  }

  static validateDuplicate(numbers, errorMessage = ErrorMessage.DUPLICATE) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(errorMessage);
    }
  }
}

export default NumberValidator;

