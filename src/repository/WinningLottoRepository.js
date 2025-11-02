class WinningLottoRepository {
  #winningLotto;

  constructor() {
    this.#winningLotto = null;
  }

  save(winningLotto) {
    this.#winningLotto = winningLotto;
  }

  find() {
    return this.#winningLotto;
  }
}

export default WinningLottoRepository;

