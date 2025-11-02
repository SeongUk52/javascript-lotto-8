class LottoWinningService {
  #lottoRepository;
  #winningLottoRepository;

  constructor(lottoRepository, winningLottoRepository) {
    this.#lottoRepository = lottoRepository;
    this.#winningLottoRepository = winningLottoRepository;
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
}

export default LottoWinningService;

