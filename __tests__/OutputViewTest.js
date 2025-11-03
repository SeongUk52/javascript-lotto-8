import OutputView from "../src/view/OutputView";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto";

jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Console: {
      print: jest.fn(),
    },
  },
}));

describe("출력 뷰 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("로또 개수를 출력한다.", () => {
    OutputView.printLottoCount(8);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("8개를 구매했습니다.\n");
  });

  test("로또 번호 형식을 출력한다.", () => {
    const numbers = [8, 21, 23, 41, 42, 43];

    OutputView.printLottoNumberFormat(numbers);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("[8, 21, 23, 41, 42, 43]");
  });

  test("로또 목록을 출력한다.", () => {
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
    ];

    OutputView.printLottoNumbers(lottos);

    expect(MissionUtils.Console.print).toHaveBeenCalledTimes(3);
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(1, "[8, 21, 23, 41, 42, 43]");
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(2, "[3, 5, 11, 16, 32, 38]");
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(3, "");
  });

  test("당첨 통계 헤더를 출력한다.", () => {
    OutputView.printWinningStatisticsHeader();

    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(1, "\n당첨 통계");
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(2, "---");
  });

  test("등수별 당첨 통계를 출력한다.", () => {
    const rankCounts = {
      0: 0,
      1: 1,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
    };

    OutputView.printWinningStatistics(rankCounts);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("\n당첨 통계");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("---");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("3개 일치 (5,000원) - 1개");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("4개 일치 (50,000원) - 0개");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("5개 일치 (1,500,000원) - 0개");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("5개 일치, 보너스 볼 일치 (30,000,000원) - 0개");
    expect(MissionUtils.Console.print).toHaveBeenCalledWith("6개 일치 (2,000,000,000원) - 1개");
  });

  test("수익률을 출력한다.", () => {
    OutputView.printProfitRate(62.5);

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("총 수익률은 62.5%입니다.");
  });
});

