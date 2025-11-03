import { MissionUtils } from "@woowacourse/mission-utils";
import WinningLotto from "../WinningLotto.js";
import LottoWinningService from "../service/LottoWinningService.js";

class OutputView {
  static printLottoCount(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      OutputView.printLottoNumberFormat(numbers);
    });
  }

  static printLottoNumberFormat(numbers) {
    MissionUtils.Console.print(`[${numbers.join(", ")}]`);
  }

  static printWinningStatistics(rankCounts) {
    OutputView.printWinningStatisticsHeader();
    OutputView.printWinningStatisticsBody(rankCounts);
  }

  static printWinningStatisticsHeader() {
    MissionUtils.Console.print("당첨 통계");
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
    
    MissionUtils.Console.print(`${matchCount}개 일치 (${formattedPrize}원) - ${count}개`);
  }

  static printRankStatisticsSecond(count) {
    const matchCount = OutputView.getMatchCountByRank(WinningLotto.RANK_SECOND);
    const prize = OutputView.getPrizeByRank(WinningLotto.RANK_SECOND);
    const formattedPrize = OutputView.formatPrize(prize);
    
    MissionUtils.Console.print(`${matchCount}개 일치, 보너스 볼 일치 (${formattedPrize}원) - ${count}개`);
  }

  static getMatchCountByRank(rank) {
    if (rank === WinningLotto.RANK_FIRST) {
      return WinningLotto.MATCH_COUNT_FIRST;
    }
    if (rank === WinningLotto.RANK_SECOND || rank === WinningLotto.RANK_THIRD) {
      return WinningLotto.MATCH_COUNT_SECOND_THIRD;
    }
    if (rank === WinningLotto.RANK_FOURTH) {
      return WinningLotto.MATCH_COUNT_FOURTH;
    }
    if (rank === WinningLotto.RANK_FIFTH) {
      return WinningLotto.MATCH_COUNT_FIFTH;
    }
    return 0;
  }

  static getPrizeByRank(rank) {
    if (rank === WinningLotto.RANK_FIRST) {
      return LottoWinningService.PRIZE_FIRST;
    }
    if (rank === WinningLotto.RANK_SECOND) {
      return LottoWinningService.PRIZE_SECOND;
    }
    if (rank === WinningLotto.RANK_THIRD) {
      return LottoWinningService.PRIZE_THIRD;
    }
    if (rank === WinningLotto.RANK_FOURTH) {
      return LottoWinningService.PRIZE_FOURTH;
    }
    if (rank === WinningLotto.RANK_FIFTH) {
      return LottoWinningService.PRIZE_FIFTH;
    }
    return 0;
  }

  static formatPrize(prize) {
    return prize.toLocaleString();
  }

  static printProfitRate(profitRate) {
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default OutputView;

