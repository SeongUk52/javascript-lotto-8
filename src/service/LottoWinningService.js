import WinningLotto from "../WinningLotto.js";

class LottoWinningService {
  static PRIZE_FIRST = 2000000000;
  static PRIZE_SECOND = 30000000;
  static PRIZE_THIRD = 1500000;
  static PRIZE_FOURTH = 50000;
  static PRIZE_FIFTH = 5000;
  static PERCENTAGE_MULTIPLIER = 100;
  static ROUND_DECIMAL_PLACES = 10;
  static INITIAL_COUNT = 0;
  static INITIAL_PRIZE = 0;

  #lottoRepository;
  #winningLottoRepository;
  #purchaseAmountRepository;

  constructor(lottoRepository, winningLottoRepository, purchaseAmountRepository) {
    this.#lottoRepository = lottoRepository;
    this.#winningLottoRepository = winningLottoRepository;
    this.#purchaseAmountRepository = purchaseAmountRepository;
  }

  calculateRanks() {
    const lottos = this.#lottoRepository.findAll();
    const winningLotto = this.#winningLottoRepository.find();
    
    return lottos.map((lotto) => winningLotto.getRank(lotto));
  }

  calculateRankCounts() {
    const ranks = this.calculateRanks();
    const rankCounts = {
      [WinningLotto.RANK_NONE]: LottoWinningService.INITIAL_COUNT,
      [WinningLotto.RANK_FIRST]: LottoWinningService.INITIAL_COUNT,
      [WinningLotto.RANK_SECOND]: LottoWinningService.INITIAL_COUNT,
      [WinningLotto.RANK_THIRD]: LottoWinningService.INITIAL_COUNT,
      [WinningLotto.RANK_FOURTH]: LottoWinningService.INITIAL_COUNT,
      [WinningLotto.RANK_FIFTH]: LottoWinningService.INITIAL_COUNT,
    };
    
    ranks.forEach((rank) => {
      rankCounts[rank] += 1;
    });
    
    return rankCounts;
  }

  calculateTotalPrize() {
    const rankCounts = this.calculateRankCounts();
    const prizeAmounts = this.#getPrizeAmounts();
    const ranks = this.#getValidRanks();
    
    return ranks.reduce((totalPrize, rank) => {
      return totalPrize + rankCounts[rank] * prizeAmounts[rank];
    }, LottoWinningService.INITIAL_PRIZE);
  }

  #getPrizeAmounts() {
    return {
      [WinningLotto.RANK_FIRST]: LottoWinningService.PRIZE_FIRST,
      [WinningLotto.RANK_SECOND]: LottoWinningService.PRIZE_SECOND,
      [WinningLotto.RANK_THIRD]: LottoWinningService.PRIZE_THIRD,
      [WinningLotto.RANK_FOURTH]: LottoWinningService.PRIZE_FOURTH,
      [WinningLotto.RANK_FIFTH]: LottoWinningService.PRIZE_FIFTH,
    };
  }

  #getValidRanks() {
    return [
      WinningLotto.RANK_FIRST,
      WinningLotto.RANK_SECOND,
      WinningLotto.RANK_THIRD,
      WinningLotto.RANK_FOURTH,
      WinningLotto.RANK_FIFTH,
    ];
  }

  calculateProfitRate() {
    const totalPrize = this.calculateTotalPrize();
    const purchaseAmount = this.#purchaseAmountRepository.find();
    
    if (!purchaseAmount) {
      return LottoWinningService.INITIAL_PRIZE;
    }
    
    const purchaseAmountValue = purchaseAmount.getAmount();
    const profitRate = (totalPrize / purchaseAmountValue) * LottoWinningService.PERCENTAGE_MULTIPLIER;
    
    return Math.round(profitRate * LottoWinningService.ROUND_DECIMAL_PLACES) / LottoWinningService.ROUND_DECIMAL_PLACES;
  }
}

export default LottoWinningService;

