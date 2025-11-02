class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    this.#validateNumeric(bonusNumber);
    this.#validateRange(bonusNumber);
    this.#validateDuplicate(bonusNumber, winningNumbers);
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

  static #validateDuplicate(bonusNumber, winningNumbers) {
    const number = Number(bonusNumber);
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default BonusNumberValidator;

