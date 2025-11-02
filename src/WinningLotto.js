import Lotto from "./Lotto.js";

class WinningLotto {
  #winningLotto;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningLotto = new Lotto(winningNumbers);
    this.#validateBonusNumber(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  getWinningNumbers() {
    return this.#winningLotto.getNumbers();
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  countMatchingNumbers(lotto) {
    const lottoNumbers = lotto.getNumbers();
    const winningNumbers = this.getWinningNumbers();
    
    return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  hasBonusNumber(lotto) {
    const lottoNumbers = lotto.getNumbers();
    return lottoNumbers.includes(this.#bonusNumber);
  }

  getRank(lotto) {
    const matchCount = this.countMatchingNumbers(lotto);
    
    if (matchCount === 6) {
      return 1;
    }
    if (matchCount === 5 && this.hasBonusNumber(lotto)) {
      return 2;
    }
    if (matchCount === 5) {
      return 3;
    }
    if (matchCount === 4) {
      return 4;
    }
    if (matchCount === 3) {
      return 5;
    }
    
    return 0;
  }
}

export default WinningLotto;

