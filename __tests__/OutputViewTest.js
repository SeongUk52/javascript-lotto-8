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

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("8개를 구매했습니다.");
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

    expect(MissionUtils.Console.print).toHaveBeenCalledTimes(2);
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(1, "[8, 21, 23, 41, 42, 43]");
    expect(MissionUtils.Console.print).toHaveBeenNthCalledWith(2, "[3, 5, 11, 16, 32, 38]");
  });
});

