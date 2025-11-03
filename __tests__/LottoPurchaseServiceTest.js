import LottoPurchaseService from "../src/service/LottoPurchaseService";

describe("로또 구매 서비스 테스트", () => {
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

