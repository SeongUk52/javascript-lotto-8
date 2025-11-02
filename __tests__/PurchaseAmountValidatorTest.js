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

  test("1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("500");
    }).toThrow("[ERROR]");
  });

  test("1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchaseAmountValidator.validate("1500");
    }).toThrow("[ERROR]");
  });
});

