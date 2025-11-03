import { MissionUtils } from "@woowacourse/mission-utils";
import WinningLotto from "../WinningLotto.js";
import LottoWinningService from "../service/LottoWinningService.js";

class OutputView {
  static printLottoCount(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.\n`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      OutputView.printLottoNumberFormat(numbers);
    });
    MissionUtils.Console.print("");
  }

  static printLottoNumberFormat(numbers) {
    MissionUtils.Console.print(`[${numbers.join(", ")}]`);
  }

  static printWinningStatistics(rankCounts) {
    OutputView.printWinningStatisticsHeader();
    OutputView.printWinningStatisticsBody(rankCounts);
  }

  static printWinningStatisticsHeader() {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
  }

  static printWinningStatisticsBody(rankCounts) {
    OutputView.printRankStatistics(WinningLotto.RANK_FIFTH, rankCounts[WinningLotto.RANK_FIFTH]);
    OutputView.printRankStatistics(WinningLotto.RANK_FOURTH, rankCounts[WinningLotto.RANK_FOURTH]);
    OutputView.printRankStatistics(WinningLotto.RANK_THIRD, rankCounts[WinningLotto.RANK_THIRD]);
    OutputView.printRankStatisticsSecond(rankCounts[WinningLotto.RANK_SECOND]);
    OutputView.printRankStatistics(WinningLotto.RANK_FIRST, rankCounts[WinningLotto.RANK_FIRST]);
  }

  static printRankStatistics(rank, count) {
    const matchCount = OutputView.getMatchCountByRank(rank);
    const prize = OutputView.getPrizeByRank(rank);
    const formattedPrize = OutputView.formatPrize(prize);
    const bonusText = rank === WinningLotto.RANK_SECOND ? ", 보너스 볼 일치" : "";
    
    MissionUtils.Console.print(`${matchCount}개 일치${bonusText} (${formattedPrize}원) - ${count}개`);
  }

  static printRankStatisticsSecond(count) {
    OutputView.printRankStatistics(WinningLotto.RANK_SECOND, count);
  }

  static getMatchCountByRank(rank) {
    const MATCH_COUNT_MAP = {
      [WinningLotto.RANK_FIRST]: WinningLotto.MATCH_COUNT_FIRST,
      [WinningLotto.RANK_SECOND]: WinningLotto.MATCH_COUNT_SECOND_THIRD,
      [WinningLotto.RANK_THIRD]: WinningLotto.MATCH_COUNT_SECOND_THIRD,
      [WinningLotto.RANK_FOURTH]: WinningLotto.MATCH_COUNT_FOURTH,
      [WinningLotto.RANK_FIFTH]: WinningLotto.MATCH_COUNT_FIFTH,
    };
    
    return MATCH_COUNT_MAP[rank] || 0;
  }

  static getPrizeByRank(rank) {
    const PRIZE_MAP = {
      [WinningLotto.RANK_FIRST]: LottoWinningService.PRIZE_FIRST,
      [WinningLotto.RANK_SECOND]: LottoWinningService.PRIZE_SECOND,
      [WinningLotto.RANK_THIRD]: LottoWinningService.PRIZE_THIRD,
      [WinningLotto.RANK_FOURTH]: LottoWinningService.PRIZE_FOURTH,
      [WinningLotto.RANK_FIFTH]: LottoWinningService.PRIZE_FIFTH,
    };
    
    return PRIZE_MAP[rank] || 0;
  }

  static formatPrize(prize) {
    return prize.toLocaleString();
  }

  static printProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;

