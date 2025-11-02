import PurchaseAmount from "../src/PurchaseAmount";

describe("구매 금액 클래스 테스트", () => {
  test("구매 금액을 저장한다.", () => {
    const purchaseAmount = new PurchaseAmount(14000);
    
    expect(purchaseAmount.getAmount()).toBe(14000);
  });
});

