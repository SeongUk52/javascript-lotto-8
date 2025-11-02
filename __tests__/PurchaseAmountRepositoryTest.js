import PurchaseAmountRepository from "../src/repository/PurchaseAmountRepository";
import PurchaseAmount from "../src/PurchaseAmount";

describe("구매 금액 리포지토리 테스트", () => {
  test("구매 금액을 저장한다.", () => {
    const repository = new PurchaseAmountRepository();
    const purchaseAmount = new PurchaseAmount(14000);
    
    repository.save(purchaseAmount);
    
    const saved = repository.find();
    expect(saved).toBe(purchaseAmount);
  });
});

