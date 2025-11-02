import LottoRepository from "../src/repository/LottoRepository";
import Lotto from "../src/Lotto";

describe("로또 리포지토리 테스트", () => {
  test("발행한 로또 목록을 저장한다.", () => {
    const repository = new LottoRepository();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    
    repository.save(lotto);
    
    const lottos = repository.findAll();
    expect(lottos).toHaveLength(1);
    expect(lottos[0]).toBe(lotto);
  });
});

