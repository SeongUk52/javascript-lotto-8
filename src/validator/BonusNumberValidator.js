import NumberValidator from "./NumberValidator.js";
import Lotto from "../Lotto.js";

class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    NumberValidator.validateNumeric(bonusNumber, "[ERROR] 보너스 번호는 숫자여야 합니다.");
    NumberValidator.validateRange(bonusNumber, `[ERROR] 보너스 번호는 ${Lotto.MIN_NUMBER}부터 ${Lotto.MAX_NUMBER} 사이의 숫자여야 합니다.`);
    this.#validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  static #validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const number = Number(bonusNumber);
    if (winningNumbers.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  static parse(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    return Number(bonusNumber);
  }
}

export default BonusNumberValidator;

