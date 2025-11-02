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
}

export default LottoWinningService;

