import Lotto from "./Lotto.js";
import ErrorMessage from "./constants/ErrorMessage.js";

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

  static RANK_CONDITIONS = [
    { matchCount: WinningLotto.MATCH_COUNT_FIRST, rank: WinningLotto.RANK_FIRST, requireBonus: false },
    { matchCount: WinningLotto.MATCH_COUNT_SECOND_THIRD, rank: WinningLotto.RANK_SECOND, requireBonus: true },
    { matchCount: WinningLotto.MATCH_COUNT_SECOND_THIRD, rank: WinningLotto.RANK_THIRD, requireBonus: false },
    { matchCount: WinningLotto.MATCH_COUNT_FOURTH, rank: WinningLotto.RANK_FOURTH, requireBonus: false },
    { matchCount: WinningLotto.MATCH_COUNT_FIFTH, rank: WinningLotto.RANK_FIFTH, requireBonus: false },
  ];

  #winningLotto;
  #bonusNumber;

  constructor(winningNumbers, bonusNumber) {
    this.#winningLotto = new Lotto(winningNumbers);
    this.#validateBonusNumber(bonusNumber, winningNumbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, winningNumbers) {
    if (bonusNumber < WinningLotto.MIN_NUMBER || bonusNumber > WinningLotto.MAX_NUMBER) {
      throw new Error(ErrorMessage.BONUS_NUMBER_RANGE(WinningLotto.MIN_NUMBER, WinningLotto.MAX_NUMBER));
    }
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error(ErrorMessage.BONUS_NUMBER_DUPLICATE);
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
    const hasBonus = this.hasBonusNumber(lotto);
    
    const matchedCondition = WinningLotto.RANK_CONDITIONS.find((condition) => {
      const isMatchCountEqual = matchCount === condition.matchCount;
      const isBonusSatisfied = !condition.requireBonus || hasBonus;
      return isMatchCountEqual && isBonusSatisfied;
    });
    
    return matchedCondition?.rank ?? WinningLotto.RANK_NONE;
  }
}

export default WinningLotto;

