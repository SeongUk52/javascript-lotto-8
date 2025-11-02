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
}

export default LottoWinningService;

