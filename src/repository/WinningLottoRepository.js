class WinningLottoRepository {
  #winningLotto = null;

  save(winningLotto) {
    this.#winningLotto = winningLotto;
  }

  find() {
    return this.#winningLotto;
  }
}

export default WinningLottoRepository;

