import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import PurchaseAmountValidator from "../validator/PurchaseAmountValidator.js";
import WinningNumberValidator from "../validator/WinningNumberValidator.js";
import BonusNumberValidator from "../validator/BonusNumberValidator.js";
import PurchaseAmount from "../PurchaseAmount.js";
import WinningLotto from "../WinningLotto.js";
import LottoRepository from "../repository/LottoRepository.js";
import PurchaseAmountRepository from "../repository/PurchaseAmountRepository.js";
import WinningLottoRepository from "../repository/WinningLottoRepository.js";
import LottoPurchaseService from "../service/LottoPurchaseService.js";
import LottoWinningService from "../service/LottoWinningService.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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
    const purchaseAmountInput = await this.#readPurchaseAmountWithValidation();
    const purchaseAmount = new PurchaseAmount(Number(purchaseAmountInput));
    
    this.#purchaseAmountRepository.save(purchaseAmount);
    this.#generateLottos(purchaseAmount);
  }

  async #readPurchaseAmountWithValidation() {
    try {
      const input = await InputView.readPurchaseAmount();
      PurchaseAmountValidator.validate(input);
      return input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#readPurchaseAmountWithValidation();
    }
  }

  #generateLottos(purchaseAmount) {
    const lottoCount = this.#lottoPurchaseService.calculateLottoCount(purchaseAmount);
    
    for (let i = 0; i < lottoCount; i++) {
      const numbers = this.#lottoPurchaseService.generateNumbers();
      const lotto = this.#lottoPurchaseService.createLotto(numbers);
      this.#lottoPurchaseService.saveLotto(this.#lottoRepository, lotto);
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
    const bonusNumberInput = await this.#readBonusNumberWithValidation(winningNumbers);
    const bonusNumber = Number(bonusNumberInput);
    
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    this.#winningLottoRepository.save(winningLotto);
  }

  async #readWinningNumbersWithValidation() {
    try {
      const input = await InputView.readWinningNumbers();
      return WinningNumberValidator.parse(input);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#readWinningNumbersWithValidation();
    }
  }

  async #readBonusNumberWithValidation(winningNumbers) {
    try {
      const input = await InputView.readBonusNumber();
      BonusNumberValidator.validate(input, winningNumbers);
      return input;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.#readBonusNumberWithValidation(winningNumbers);
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

