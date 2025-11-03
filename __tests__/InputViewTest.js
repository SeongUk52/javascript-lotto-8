import InputView from "../src/view/InputView";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Console: {
      print: jest.fn(),
      readLineAsync: jest.fn(),
    },
  },
}));

describe("입력 뷰 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("구매 금액 프롬프트를 출력한다.", () => {
    InputView.printPurchaseAmountPrompt();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("구입금액을 입력해 주세요.");
  });

  test("구매 금액 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("8000");

    const input = await InputView.readPurchaseAmountInput();

    expect(input).toBe("8000");
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(1);
  });

  test("구매 금액 입력 전체 프로세스를 수행한다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("8000");

    const input = await InputView.readPurchaseAmount();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("구입금액을 입력해 주세요.");
    expect(input).toBe("8000");
  });
});

