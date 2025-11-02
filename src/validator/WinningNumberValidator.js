class WinningNumberValidator {
  static parse(input) {
    if (!input.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
    
    const numbers = input.split(",").map((number) => number.trim());
    this.#validateCount(numbers);
    this.#validateNumeric(numbers);
    
    const parsedNumbers = numbers.map((number) => Number(number));
    this.#validateRange(parsedNumbers);
    this.#validateDuplicate(parsedNumbers);
    
    return parsedNumbers;
  }

  static #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
  }

  static #validateNumeric(numbers) {
    numbers.forEach((number) => {
      if (number === "" || isNaN(Number(number))) {
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      }
    });
  }

  static #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  static #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    }
  }
}

export default WinningNumberValidator;

