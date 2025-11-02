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

  test("발행한 로또 개수를 조회한다.", () => {
    const repository = new LottoRepository();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12]);
    
    repository.save(lotto1);
    repository.save(lotto2);
    
    expect(repository.count()).toBe(2);
  });
});

