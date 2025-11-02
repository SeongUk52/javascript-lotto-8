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
});

