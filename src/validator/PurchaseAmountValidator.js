class PurchaseAmountValidator {
  static validate(amount) {
    this.#validateNumeric(amount);
    this.#validateUnit(amount);
  }

  static #validateNumeric(amount) {
    if (amount === "" || isNaN(Number(amount))) {
      throw new Error("[ERROR] 구매 금액은 숫자여야 합니다.");
    }
  }

  static #validateUnit(amount) {
    const amountNumber = Number(amount);
    if (amountNumber < 1000) {
      throw new Error("[ERROR] 구매 금액은 1,000원 이상이어야 합니다.");
    }
    if (amountNumber % 1000 !== 0) {
      throw new Error("[ERROR] 구매 금액은 1,000원 단위여야 합니다.");
    }
  }
}

export default PurchaseAmountValidator;

