import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import PurchaseAmountValidator from "../validator/PurchaseAmountValidator.js";
import WinningNumberValidator from "../validator/WinningNumberValidator.js";
import BonusNumberValidator from "../validator/BonusNumberValidator.js";
import PurchaseAmount from "../PurchaseAmount.js";
import Lotto from "../Lotto.js";
import WinningLotto from "../WinningLotto.js";
import LottoRepository from "../repository/LottoRepository.js";
import PurchaseAmountRepository from "../repository/PurchaseAmountRepository.js";
import WinningLottoRepository from "../repository/WinningLottoRepository.js";
import LottoPurchaseService from "../service/LottoPurchaseService.js";
import LottoWinningService from "../service/LottoWinningService.js";

class LottoController {
  #lottoRepository;
  #purchaseAmountRepository;
  #winningLottoRepository;
  #lottoPurchaseService;
  #lottoWinningService;

  constructor() {
    this.#lottoRepository = new LottoRepository();
    this.#purchaseAmountRepository = new PurchaseAmountRepository();
    this.#winningLottoRepository = new WinningLottoRepository();
    this.#lottoPurchaseService = new LottoPurchaseService();
    this.#lottoWinningService = new LottoWinningService(
      this.#lottoRepository,
      this.#winningLottoRepository,
      this.#purchaseAmountRepository
    );
  }

  async run() {
    await this.#purchaseLottos();
    this.#printLottos();
    await this.#inputWinningNumbers();
    this.#calculateAndPrintStatistics();
  }

  async #purchaseLottos() {
    const purchaseAmountValue = await this.#readPurchaseAmountWithValidation();
    const purchaseAmount = new PurchaseAmount(purchaseAmountValue);
    
    this.#purchaseAmountRepository.save(purchaseAmount);
    this.#generateLottos(purchaseAmount);
  }

  async #readPurchaseAmountWithValidation() {
    return await this.#readWithValidation(
      () => InputView.readPurchaseAmount(),
      (input) => PurchaseAmountValidator.parse(input)
    );
  }

  #generateLottos(purchaseAmount) {
    const lottoCount = purchaseAmount.getLottoCount();
    
    for (let i = 0; i < lottoCount; i++) {
      const numbers = this.#lottoPurchaseService.generateNumbers();
      const lotto = new Lotto(numbers);
      this.#lottoRepository.save(lotto);
    }
  }

  #printLottos() {
    const lottos = this.#lottoRepository.findAll();
    const lottoCount = lottos.length;
    
    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoNumbers(lottos);
  }

  async #inputWinningNumbers() {
    const winningNumbers = await this.#readWinningNumbersWithValidation();
    const bonusNumber = await this.#readBonusNumberWithValidation(winningNumbers);
    
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    this.#winningLottoRepository.save(winningLotto);
  }

  async #readWinningNumbersWithValidation() {
    return await this.#readWithValidation(
      () => InputView.readWinningNumbers(),
      (input) => WinningNumberValidator.parse(input)
    );
  }

  async #readBonusNumberWithValidation(winningNumbers) {
    return await this.#readWithValidation(
      () => InputView.readBonusNumber(),
      (input) => BonusNumberValidator.parse(input, winningNumbers)
    );
  }

  async #readWithValidation(inputReader, validator) {
    try {
      const input = await inputReader();
      return validator(input);
    } catch (error) {
      OutputView.printError(error);
      return await this.#readWithValidation(inputReader, validator);
    }
  }

  #calculateAndPrintStatistics() {
    const rankCounts = this.#lottoWinningService.calculateRankCounts();
    const profitRate = this.#lottoWinningService.calculateProfitRate();
    
    OutputView.printWinningStatistics(rankCounts);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoController;

