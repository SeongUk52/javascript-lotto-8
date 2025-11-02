class PurchaseAmountRepository {
  #purchaseAmount;

  constructor() {
    this.#purchaseAmount = null;
  }

  save(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
  }

  find() {
    return this.#purchaseAmount;
  }
}

export default PurchaseAmountRepository;

