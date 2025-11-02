class PurchaseAmount {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }
}

export default PurchaseAmount;

