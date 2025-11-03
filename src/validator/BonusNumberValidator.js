import NumberValidator from "./NumberValidator.js";
import Lotto from "../Lotto.js";
import ErrorMessage from "../constants/ErrorMessage.js";

class BonusNumberValidator {
  static validate(bonusNumber, winningNumbers) {
    NumberValidator.validateNumeric(bonusNumber, ErrorMessage.BONUS_NUMBER_NOT_NUMERIC);
    NumberValidator.validateRange(bonusNumber, ErrorMessage.BONUS_NUMBER_RANGE(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER));
    this.#validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers);
  }

  static #validateDuplicateWithWinningNumbers(bonusNumber, winningNumbers) {
    const number = Number(bonusNumber);
    if (winningNumbers.includes(number)) {
      throw new Error(ErrorMessage.BONUS_NUMBER_DUPLICATE);
    }
  }

  static parse(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    return Number(bonusNumber);
  }
}

export default BonusNumberValidator;

