import LottoWinningService from "../src/service/LottoWinningService";
import LottoRepository from "../src/repository/LottoRepository";
import WinningLottoRepository from "../src/repository/WinningLottoRepository";
import Lotto from "../src/Lotto";
import WinningLotto from "../src/WinningLotto";

describe("당첨 계산 서비스 테스트", () => {
  test("구매한 로또와 당첨 번호를 비교한다.", () => {
    const lottoRepository = new LottoRepository();
    const winningLottoRepository = new WinningLottoRepository();
    const service = new LottoWinningService(lottoRepository, winningLottoRepository);
    
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
    const service = new LottoWinningService(lottoRepository, winningLottoRepository);
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
});

