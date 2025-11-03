import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class LottoPurchaseService {
  calculateLottoCount(purchaseAmount) {
    return purchaseAmount.getLottoCount();
  }

  generateNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.NUMBER_COUNT
    );
  }

  createLotto(numbers) {
    return new Lotto(numbers);
  }
}

export default LottoPurchaseService;

