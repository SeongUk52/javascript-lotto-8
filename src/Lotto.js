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
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (number < Lotto.MIN_NUMBER || number > Lotto.MAX_NUMBER) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
