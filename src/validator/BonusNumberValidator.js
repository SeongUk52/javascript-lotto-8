class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    this.#validateNumeric(bonusNumber);
  }

  static #validateNumeric(bonusNumber) {
    if (bonusNumber === "" || isNaN(Number(bonusNumber))) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  }
}

export default BonusNumberValidator;

