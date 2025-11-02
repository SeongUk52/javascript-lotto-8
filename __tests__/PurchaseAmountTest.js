import PurchaseAmount from "../src/PurchaseAmount";

describe("구매 금액 클래스 테스트", () => {
  test("구매 금액을 저장한다.", () => {
    const purchaseAmount = new PurchaseAmount(14000);
    
    expect(purchaseAmount.getAmount()).toBe(14000);
  });

  test("구매 금액에 따른 로또 개수를 계산한다.", () => {
    const purchaseAmount = new PurchaseAmount(14000);
    
    expect(purchaseAmount.getLottoCount()).toBe(14);
  });

  test("구매 금액 8000원에 따른 로또 개수를 계산한다.", () => {
    const purchaseAmount = new PurchaseAmount(8000);
    
    expect(purchaseAmount.getLottoCount()).toBe(8);
  });
});

