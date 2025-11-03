import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static async readPurchaseAmount() {
    InputView.printPurchaseAmountPrompt();
    return await InputView.readPurchaseAmountInput();
  }

  static printPurchaseAmountPrompt() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
  }

  static async readPurchaseAmountInput() {
    return await MissionUtils.Console.readLineAsync();
  }
}

export default InputView;

