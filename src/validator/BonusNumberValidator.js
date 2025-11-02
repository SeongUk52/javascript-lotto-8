class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    this.#validateNumeric(bonusNumber);
    this.#validateRange(bonusNumber);
  }

  static #validateNumeric(bonusNumber) {
    if (bonusNumber === "" || isNaN(Number(bonusNumber))) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }

  static #validateRange(bonusNumber) {
    const number = Number(bonusNumber);
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }
}

export default BonusNumberValidator;

