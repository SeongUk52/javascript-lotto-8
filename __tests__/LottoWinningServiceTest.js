import LottoWinningService from "../src/service/LottoWinningService";
import LottoRepository from "../src/repository/LottoRepository";
import WinningLottoRepository from "../src/repository/WinningLottoRepository";
import PurchaseAmountRepository from "../src/repository/PurchaseAmountRepository";
import Lotto from "../src/Lotto";
import WinningLotto from "../src/WinningLotto";
import PurchaseAmount from "../src/PurchaseAmount";

describe("당첨 계산 서비스 테스트", () => {
  test("구매한 로또와 당첨 번호를 비교한다.", () => {
    const lottoRepository = new LottoRepository();
    const winningLottoRepository = new WinningLottoRepository();
    const purchaseAmountRepository = new PurchaseAmountRepository();
    const service = new LottoWinningService(
      lottoRepository,
      winningLottoRepository,
      purchaseAmountRepository
    );
    
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    
    lottoRepository.save(lotto);
    winningLottoRepository.save(winningLotto);
    
    const ranks = service.calculateRanks();
    
    expect(ranks).toHaveLength(1);
    expect(ranks[0]).toBe(1);
  });

  test("등수별 일치 개수를 계산한다.", () => {
    const lottoRepository = new LottoRepository();
    const winningLottoRepository = new WinningLottoRepository();
    const purchaseAmountRepository = new PurchaseAmountRepository();
    const service = new LottoWinningService(
      lottoRepository,
      winningLottoRepository,
      purchaseAmountRepository
    );
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    
    lottoRepository.save(new Lotto([1, 2, 3, 4, 5, 6])); // 1등
    lottoRepository.save(new Lotto([1, 2, 3, 4, 5, 7])); // 2등
    lottoRepository.save(new Lotto([1, 2, 3, 4, 5, 10])); // 3등
    lottoRepository.save(new Lotto([1, 2, 3, 4, 10, 11])); // 4등
    lottoRepository.save(new Lotto([1, 2, 3, 10, 11, 12])); // 5등
    
    winningLottoRepository.save(winningLotto);
    
    const rankCounts = service.calculateRankCounts();
    
    expect(rankCounts[1]).toBe(1);
    expect(rankCounts[2]).toBe(1);
    expect(rankCounts[3]).toBe(1);
    expect(rankCounts[4]).toBe(1);
    expect(rankCounts[5]).toBe(1);
  });

  test("등수별 당첨 금액을 계산한다.", () => {
    const lottoRepository = new LottoRepository();
    const winningLottoRepository = new WinningLottoRepository();
    const purchaseAmountRepository = new PurchaseAmountRepository();
    const service = new LottoWinningService(
      lottoRepository,
      winningLottoRepository,
      purchaseAmountRepository
    );
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    
    lottoRepository.save(new Lotto([1, 2, 3, 4, 5, 6])); // 1등: 2,000,000,000원
    lottoRepository.save(new Lotto([1, 2, 3, 4, 5, 10])); // 3등: 1,500,000원
    lottoRepository.save(new Lotto([1, 2, 3, 10, 11, 12])); // 5등: 5,000원
    
    winningLottoRepository.save(winningLotto);
    
    const totalPrize = service.calculateTotalPrize();
    
    expect(totalPrize).toBe(2001505000);
  });

  test("총 수익률을 계산한다 (소수점 둘째 자리 반올림).", () => {
    const lottoRepository = new LottoRepository();
    const winningLottoRepository = new WinningLottoRepository();
    const purchaseAmountRepository = new PurchaseAmountRepository();
    const service = new LottoWinningService(
      lottoRepository,
      winningLottoRepository,
      purchaseAmountRepository
    );
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    
    lottoRepository.save(new Lotto([1, 2, 3, 10, 11, 12])); // 5등: 5,000원
    purchaseAmountRepository.save(new PurchaseAmount(8000)); // 구매 금액: 8,000원
    
    winningLottoRepository.save(winningLotto);
    
    const profitRate = service.calculateProfitRate();
    
    expect(profitRate).toBe(62.5);
  });
});

