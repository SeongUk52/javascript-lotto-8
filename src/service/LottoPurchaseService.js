import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class LottoPurchaseService {
  generateNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      Lotto.MIN_NUMBER,
      Lotto.MAX_NUMBER,
      Lotto.NUMBER_COUNT
    );
  }
}

export default LottoPurchaseService;

