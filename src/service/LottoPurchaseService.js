import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class LottoPurchaseService {
  calculateLottoCount(purchaseAmount) {
    return purchaseAmount.getLottoCount();
  }

  generateNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  createLotto(numbers) {
    return new Lotto(numbers);
  }

  saveLotto(repository, lotto) {
    repository.save(lotto);
  }
}

export default LottoPurchaseService;

