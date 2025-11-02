import WinningLotto from "../src/WinningLotto";
import Lotto from "../src/Lotto";

describe("당첨 번호 클래스 테스트", () => {
  test("당첨 번호 6개와 보너스 번호 1개를 저장한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    
    expect(winningLotto.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(winningLotto.getBonusNumber()).toBe(7);
  });

  test("로또와 비교하여 일치 개수를 계산한다.", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 10, 11, 12]);
    
    expect(winningLotto.countMatchingNumbers(lotto)).toBe(3);
  });

  test("보너스 번호 일치 여부를 확인한다.", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lottoWithBonus = new Lotto([1, 2, 3, 4, 5, 7]);
    const lottoWithoutBonus = new Lotto([1, 2, 3, 4, 5, 10]);
    
    expect(winningLotto.hasBonusNumber(lottoWithBonus)).toBe(true);
    expect(winningLotto.hasBonusNumber(lottoWithoutBonus)).toBe(false);
  });

  test("당첨 등수를 판정한다 - 1등: 6개 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    
    expect(winningLotto.getRank(lotto)).toBe(1);
  });

  test("당첨 등수를 판정한다 - 2등: 5개 일치 + 보너스 번호 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    
    expect(winningLotto.getRank(lotto)).toBe(2);
  });

  test("당첨 등수를 판정한다 - 3등: 5개 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 5, 10]);
    
    expect(winningLotto.getRank(lotto)).toBe(3);
  });

  test("당첨 등수를 판정한다 - 4등: 4개 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 4, 10, 11]);
    
    expect(winningLotto.getRank(lotto)).toBe(4);
  });

  test("당첨 등수를 판정한다 - 5등: 3개 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 3, 10, 11, 12]);
    
    expect(winningLotto.getRank(lotto)).toBe(5);
  });

  test("당첨 등수를 판정한다 - 꽝: 2개 이하 일치", () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const lotto = new Lotto([1, 2, 10, 11, 12, 13]);
    
    expect(winningLotto.getRank(lotto)).toBe(0);
  });
});

