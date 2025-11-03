import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static PROMPT_PURCHASE_AMOUNT = "구입금액을 입력해 주세요.";
  static PROMPT_WINNING_NUMBERS = "당첨 번호를 입력해 주세요.";
  static PROMPT_BONUS_NUMBER = "보너스 번호를 입력해 주세요.";
  static NEWLINE = "\n";

  static async readPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync(`${InputView.PROMPT_PURCHASE_AMOUNT}${InputView.NEWLINE}`);
    return input;
  }

  static async readWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync(`${InputView.NEWLINE}${InputView.PROMPT_WINNING_NUMBERS}${InputView.NEWLINE}`);
    return input;
  }

  static async readBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(`${InputView.NEWLINE}${InputView.PROMPT_BONUS_NUMBER}${InputView.NEWLINE}`);
    return input;
  }
}

export default InputView;

