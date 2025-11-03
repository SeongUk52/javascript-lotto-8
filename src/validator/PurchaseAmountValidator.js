import PurchaseAmount from "../PurchaseAmount.js";
import NumberValidator from "./NumberValidator.js";
import ErrorMessage from "../constants/ErrorMessage.js";

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
    NumberValidator.validateNumeric(amount, ErrorMessage.PURCHASE_AMOUNT_NOT_NUMERIC);
  }

  static #validateUnit(amount) {
    const amountNumber = Number(amount);
    const minPrice = PurchaseAmount.LOTTO_PRICE.toLocaleString();
    
    if (amountNumber < PurchaseAmount.LOTTO_PRICE) {
      throw new Error(ErrorMessage.PURCHASE_AMOUNT_MIN(minPrice));
    }
    if (amountNumber % PurchaseAmount.LOTTO_PRICE !== 0) {
      throw new Error(ErrorMessage.PURCHASE_AMOUNT_UNIT(minPrice));
    }
  }
}

export default PurchaseAmountValidator;

