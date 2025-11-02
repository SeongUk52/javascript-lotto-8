import { MissionUtils } from "@woowacourse/mission-utils";

class LottoPurchaseService {
  calculateLottoCount(purchaseAmount) {
    return purchaseAmount.getLottoCount();
  }

  generateNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoPurchaseService;

