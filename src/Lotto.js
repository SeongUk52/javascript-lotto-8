import ErrorMessage from "./constants/ErrorMessage.js";

class Lotto {
  static MIN_NUMBER = 1;
  static MAX_NUMBER = 45;
  static NUMBER_COUNT = 6;

  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== Lotto.NUMBER_COUNT) {
      throw new Error(ErrorMessage.LOTTO_COUNT(Lotto.NUMBER_COUNT));
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(ErrorMessage.LOTTO_DUPLICATE);
    }
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < Lotto.MIN_NUMBER || number > Lotto.MAX_NUMBER) {
        throw new Error(ErrorMessage.LOTTO_RANGE(Lotto.MIN_NUMBER, Lotto.MAX_NUMBER));
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
