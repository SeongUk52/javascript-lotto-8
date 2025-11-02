import Lotto from "./Lotto.js";

class WinningLotto {
  static MIN_NUMBER = Lotto.MIN_NUMBER;
  static MAX_NUMBER = Lotto.MAX_NUMBER;
  static RANK_FIRST = 1;
  static RANK_SECOND = 2;
  static RANK_THIRD = 3;
  static RANK_FOURTH = 4;
  static RANK_FIFTH = 5;
  static RANK_NONE = 0;
  static MATCH_COUNT_FIRST = 6;
  static MATCH_COUNT_SECOND_THIRD = 5;
  static MATCH_COUNT_FOURTH = 4;
  static MATCH_COUNT_FIFTH = 3;

  #winningLotto;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningLotto = new Lotto(winningNumbers);
    this.#validateBonusNumber(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber < WinningLotto.MIN_NUMBER || bonusNumber > WinningLotto.MAX_NUMBER) {
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
    
    if (matchCount === WinningLotto.MATCH_COUNT_FIRST) {
      return WinningLotto.RANK_FIRST;
    }
    if (matchCount === WinningLotto.MATCH_COUNT_SECOND_THIRD && this.hasBonusNumber(lotto)) {
      return WinningLotto.RANK_SECOND;
    }
    if (matchCount === WinningLotto.MATCH_COUNT_SECOND_THIRD) {
      return WinningLotto.RANK_THIRD;
    }
    if (matchCount === WinningLotto.MATCH_COUNT_FOURTH) {
      return WinningLotto.RANK_FOURTH;
    }
    if (matchCount === WinningLotto.MATCH_COUNT_FIFTH) {
      return WinningLotto.RANK_FIFTH;
    }
    
    return WinningLotto.RANK_NONE;
  }
}

export default WinningLotto;

