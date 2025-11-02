class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  getLottoCount() {
    return this.#amount / 1000;
  }
}

export default PurchaseAmount;

