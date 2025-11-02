class PurchaseAmountValidator {
  static validate(amount) {
    this.#validateNumeric(amount);
  }

  static #validateNumeric(amount) {
    if (amount === "" || isNaN(Number(amount))) {
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    }
  }
}

export default PurchaseAmountValidator;

