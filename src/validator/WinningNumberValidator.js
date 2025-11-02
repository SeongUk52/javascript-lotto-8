class WinningNumberValidator {
  static parse(input) {
    if (!input.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
    
    const numbers = input.split(",").map((number) => number.trim());
    this.#validateNumeric(numbers);
    
    return numbers.map((number) => Number(number));
  }

  static #validateNumeric(numbers) {
    numbers.forEach((number) => {
      if (number === "" || isNaN(Number(number))) {
        throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
      }
    });
  }
}

export default WinningNumberValidator;

