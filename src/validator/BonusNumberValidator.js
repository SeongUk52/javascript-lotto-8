import NumberValidator from "./NumberValidator.js";

class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    NumberValidator.validateNumeric(bonusNumber, "[ERROR] 보너스 번호는 숫자여야 합니다.");
    NumberValidator.validateRange(bonusNumber, "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    this.#validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  static #validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const number = Number(bonusNumber);
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default BonusNumberValidator;

