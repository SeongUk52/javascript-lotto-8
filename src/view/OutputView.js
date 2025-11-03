import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  static printLottoCount(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      OutputView.printLottoNumberFormat(numbers);
    });
  }

  static printLottoNumberFormat(numbers) {
    MissionUtils.Console.print(`[${numbers.join(", ")}]`);
  }
}

export default OutputView;

