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

  test("구매 금액 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("8000");

    const input = await InputView.readPurchaseAmount();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      `${InputView.PROMPT_PURCHASE_AMOUNT}${InputView.NEWLINE}`
    );
    expect(input).toBe("8000");
  });

  test("당첨 번호 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");

    const input = await InputView.readWinningNumbers();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      `${InputView.NEWLINE}${InputView.PROMPT_WINNING_NUMBERS}${InputView.NEWLINE}`
    );
    expect(input).toBe("1,2,3,4,5,6");
  });

  test("보너스 번호 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("7");

    const input = await InputView.readBonusNumber();

    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      `${InputView.NEWLINE}${InputView.PROMPT_BONUS_NUMBER}${InputView.NEWLINE}`
    );
    expect(input).toBe("7");
  });
});

