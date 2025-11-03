import { MissionUtils } from "@woowacourse/mission-utils";
import WinningLotto from "../WinningLotto.js";
import LottoWinningService from "../service/LottoWinningService.js";

class OutputView {
  static MESSAGE_LOTTO_COUNT_PREFIX = "개를 구매했습니다.";
  static MESSAGE_WINNING_STATISTICS_HEADER = "당첨 통계";
  static MESSAGE_WINNING_STATISTICS_DIVIDER = "---";
  static MESSAGE_BONUS_MATCH = ", 보너스 볼 일치";
  static MESSAGE_MATCH_COUNT_SUFFIX = "개 일치";
  static MESSAGE_PRIZE_PREFIX = "(";
  static MESSAGE_PRIZE_SUFFIX = "원)";
  static MESSAGE_COUNT_PREFIX = " - ";
  static MESSAGE_COUNT_SUFFIX = "개";
  static MESSAGE_PROFIT_RATE_PREFIX = "총 수익률은 ";
  static MESSAGE_PROFIT_RATE_SUFFIX = "%입니다.";
  static DELIMITER = ", ";
  static NEWLINE = "\n";

  static printLottoCount(count) {
    MissionUtils.Console.print(`${count}${OutputView.MESSAGE_LOTTO_COUNT_PREFIX}${OutputView.NEWLINE}`);
  }

  static printLottoNumbers(lottos) {
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      OutputView.printLottoNumberFormat(numbers);
    });
    MissionUtils.Console.print("");
  }

  static printLottoNumberFormat(numbers) {
    MissionUtils.Console.print(`[${numbers.join(OutputView.DELIMITER)}]`);
  }

  static printWinningStatistics(rankCounts) {
    OutputView.printWinningStatisticsHeader();
    OutputView.printWinningStatisticsBody(rankCounts);
  }

  static printWinningStatisticsHeader() {
    MissionUtils.Console.print(`${OutputView.NEWLINE}${OutputView.MESSAGE_WINNING_STATISTICS_HEADER}`);
    MissionUtils.Console.print(OutputView.MESSAGE_WINNING_STATISTICS_DIVIDER);
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
    const bonusText = rank === WinningLotto.RANK_SECOND ? OutputView.MESSAGE_BONUS_MATCH : "";
    
    MissionUtils.Console.print(
      `${matchCount}${OutputView.MESSAGE_MATCH_COUNT_SUFFIX}${bonusText} ${OutputView.MESSAGE_PRIZE_PREFIX}${formattedPrize}${OutputView.MESSAGE_PRIZE_SUFFIX}${OutputView.MESSAGE_COUNT_PREFIX}${count}${OutputView.MESSAGE_COUNT_SUFFIX}`
    );
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
    MissionUtils.Console.print(`${OutputView.MESSAGE_PROFIT_RATE_PREFIX}${profitRate}${OutputView.MESSAGE_PROFIT_RATE_SUFFIX}`);
  }

  static printError(error) {
    MissionUtils.Console.print(error.message);
  }
}

export default OutputView;

