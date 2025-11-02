import BonusNumberValidator from "../src/validator/BonusNumberValidator";

describe("보너스 번호 검증 테스트", () => {
  test("숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("abc", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("빈 문자열이면 예외가 발생한다.", () => {
    expect(() => {
      BonusNumberValidator.validate("", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

