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

  test("당첨 번호 프롬프트를 출력한다.", () => {
    InputView.printWinningNumbersPrompt();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("당첨 번호를 입력해 주세요.");
  });

  test("당첨 번호 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");

    const input = await InputView.readWinningNumbersInput();

    expect(input).toBe("1,2,3,4,5,6");
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(1);
  });

  test("당첨 번호 입력 전체 프로세스를 수행한다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("1,2,3,4,5,6");

    const input = await InputView.readWinningNumbers();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("당첨 번호를 입력해 주세요.");
    expect(input).toBe("1,2,3,4,5,6");
  });

  test("보너스 번호 프롬프트를 출력한다.", () => {
    InputView.printBonusNumberPrompt();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
  });

  test("보너스 번호 입력을 받는다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("7");

    const input = await InputView.readBonusNumberInput();

    expect(input).toBe("7");
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(1);
  });

  test("보너스 번호 입력 전체 프로세스를 수행한다.", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("7");

    const input = await InputView.readBonusNumber();

    expect(MissionUtils.Console.print).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
    expect(input).toBe("7");
  });
});

