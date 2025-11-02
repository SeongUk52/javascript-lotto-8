class PurchaseAmount {
  static LOTTO_PRICE = 1000;

  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  getLottoCount() {
    return this.#amount / PurchaseAmount.LOTTO_PRICE;
  }
}

export default PurchaseAmount;

