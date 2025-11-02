import LottoPurchaseService from "../src/service/LottoPurchaseService";
import PurchaseAmount from "../src/PurchaseAmount";

describe("로또 구매 서비스 테스트", () => {
  test("구매 금액에 따른 로또 개수를 계산한다.", () => {
    const service = new LottoPurchaseService();
    const purchaseAmount = new PurchaseAmount(14000);
    
    const lottoCount = service.calculateLottoCount(purchaseAmount);
    
    expect(lottoCount).toBe(14);
  });
});

