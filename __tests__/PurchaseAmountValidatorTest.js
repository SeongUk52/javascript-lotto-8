import PurchaseAmountValidator from "../src/validator/PurchaseAmountValidator";

describe("구매 금액 검증 테스트", () => {
  test("숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("abc");
    }).toThrow("[ERROR]");
  });

  test("빈 문자열이면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("");
    }).toThrow("[ERROR]");
  });
});

