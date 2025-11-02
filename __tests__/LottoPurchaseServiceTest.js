import LottoPurchaseService from "../src/service/LottoPurchaseService";
import PurchaseAmount from "../src/PurchaseAmount";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("로또 구매 서비스 테스트", () => {
  test("구매 금액에 따른 로또 개수를 계산한다.", () => {
    const service = new LottoPurchaseService();
    const purchaseAmount = new PurchaseAmount(14000);
    
    const lottoCount = service.calculateLottoCount(purchaseAmount);
    
    expect(lottoCount).toBe(14);
  });

  test("중복 없는 6개 번호를 생성한다.", () => {
    const service = new LottoPurchaseService();
    
    const numbers = service.generateNumbers();
    
    expect(numbers).toHaveLength(6);
    expect(new Set(numbers).size).toBe(6);
    numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
});

