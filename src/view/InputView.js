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

  static async readWinningNumbers() {
    InputView.printWinningNumbersPrompt();
    return await InputView.readWinningNumbersInput();
  }

  static printWinningNumbersPrompt() {
    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
  }

  static async readWinningNumbersInput() {
    return await MissionUtils.Console.readLineAsync();
  }

  static async readBonusNumber() {
    InputView.printBonusNumberPrompt();
    return await InputView.readBonusNumberInput();
  }

  static printBonusNumberPrompt() {
    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
  }

  static async readBonusNumberInput() {
    return await MissionUtils.Console.readLineAsync();
  }
}

export default InputView;

