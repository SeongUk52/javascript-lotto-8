class LottoRepository {
  #lottos;

  constructor() {
    this.#lottos = [];
  }

  save(lotto) {
    this.#lottos.push(lotto);
  }

  findAll() {
    return [...this.#lottos];
  }

  count() {
    return this.#lottos.length;
  }
}

export default LottoRepository;

