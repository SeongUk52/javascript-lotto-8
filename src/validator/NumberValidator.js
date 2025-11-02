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

  static validateRange(number, errorMessage = "[ERROR] 1부터 45 사이의 숫자여야 합니다.") {
    const num = typeof number === "string" ? Number(number) : number;
    if (num < 1 || num > 45) {
      throw new Error(errorMessage);
    }
  }

  static validateRangeArray(numbers, errorMessage = "[ERROR] 1부터 45 사이의 숫자여야 합니다.") {
    numbers.forEach((number) => {
      this.validateRange(number, errorMessage);
    });
  }

  static validateDuplicate(numbers, errorMessage = "[ERROR] 중복된 숫자가 있습니다.") {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(errorMessage);
    }
  }
}

export default NumberValidator;

