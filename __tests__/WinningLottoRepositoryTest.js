import WinningLottoRepository from "../src/repository/WinningLottoRepository";
import WinningLotto from "../src/WinningLotto";

describe("당첨 번호 리포지토리 테스트", () => {
  test("당첨 번호를 저장한다.", () => {
    const repository = new WinningLottoRepository();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    
    repository.save(winningLotto);
    
    const saved = repository.find();
    expect(saved).toBe(winningLotto);
  });
});

