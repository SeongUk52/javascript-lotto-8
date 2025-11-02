import WinningNumberValidator from "../src/validator/WinningNumberValidator";

describe("당첨 번호 검증 테스트", () => {
  test("쉼표를 기준으로 당첨 번호를 분리한다.", () => {
    const numbers = WinningNumberValidator.parse("1,2,3,4,5,6");
    
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("쉼표 없이 입력하면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("123456");
    }).toThrow("[ERROR]");
  });

  test("숫자가 아닌 값이 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("1,2,3,4,5,abc");
    }).toThrow("[ERROR]");
  });

  test("빈 문자열이 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("1,2,3,4,5,");
    }).toThrow("[ERROR]");
  });

  test("1보다 작은 번호가 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("0,1,2,3,4,5");
    }).toThrow("[ERROR]");
  });

  test("45보다 큰 번호가 포함되어 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("1,2,3,4,5,46");
    }).toThrow("[ERROR]");
  });

  test("중복된 번호가 있으면 예외가 발생한다.", () => {
    expect(() => {
      WinningNumberValidator.parse("1,2,3,4,5,5");
    }).toThrow("[ERROR]");
  });
});

