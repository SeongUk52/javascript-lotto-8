import PurchaseAmount from "../PurchaseAmount.js";
import NumberValidator from "./NumberValidator.js";

class PurchaseAmountValidator {
  static validate(amount) {
    this.#validateNumeric(amount);
    this.#validateUnit(amount);
  }

  static parse(amount) {
    this.validate(amount);
    return Number(amount);
  }

  static #validateNumeric(amount) {
    NumberValidator.validateNumeric(amount, "[ERROR] 구매 금액은 숫자여야 합니다.");
  }

  static #validateUnit(amount) {
    const amountNumber = Number(amount);
    const minPrice = PurchaseAmount.LOTTO_PRICE.toLocaleString();
    
    if (amountNumber < PurchaseAmount.LOTTO_PRICE) {
      throw new Error(`[ERROR] 구매 금액은 ${minPrice}원 이상이어야 합니다.`);
    }
    if (amountNumber % PurchaseAmount.LOTTO_PRICE !== 0) {
      throw new Error(`[ERROR] 구매 금액은 ${minPrice}원 단위여야 합니다.`);
    }
  }
}

export default PurchaseAmountValidator;

