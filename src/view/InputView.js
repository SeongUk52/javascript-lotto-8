import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  static async readPurchaseAmount() {
    const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
    return input;
  }

  static async readWinningNumbers() {
    const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
    return input;
  }

  static async readBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
    return input;
  }
}

export default InputView;

