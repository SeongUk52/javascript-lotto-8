class LottoWinningService {
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
    const rankCounts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    ranks.forEach((rank) => {
      rankCounts[rank] += 1;
    });
    
    return rankCounts;
  }

  calculateTotalPrize() {
    const rankCounts = this.calculateRankCounts();
    const prizeAmounts = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
    
    let totalPrize = 0;
    [1, 2, 3, 4, 5].forEach((rank) => {
      totalPrize += rankCounts[rank] * prizeAmounts[rank];
    });
    
    return totalPrize;
  }

  calculateProfitRate() {
    const totalPrize = this.calculateTotalPrize();
    const purchaseAmount = this.#purchaseAmountRepository.find();
    
    if (!purchaseAmount) {
      return 0;
    }
    
    const purchaseAmountValue = purchaseAmount.getAmount();
    const profitRate = (totalPrize / purchaseAmountValue) * 100;
    
    return Math.round(profitRate * 10) / 10;
  }
}

export default LottoWinningService;

