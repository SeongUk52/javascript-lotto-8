class ErrorMessage {
  static ERROR_PREFIX = "[ERROR]";
  
  // PurchaseAmount 관련
  static PURCHASE_AMOUNT_NOT_NUMERIC = `${ErrorMessage.ERROR_PREFIX} 구매 금액은 숫자여야 합니다.`;
  static PURCHASE_AMOUNT_MIN = (minPrice) => `${ErrorMessage.ERROR_PREFIX} 구매 금액은 ${minPrice}원 이상이어야 합니다.`;
  static PURCHASE_AMOUNT_UNIT = (unit) => `${ErrorMessage.ERROR_PREFIX} 구매 금액은 ${unit}원 단위여야 합니다.`;
  
  // Lotto 관련
  static LOTTO_COUNT = (count) => `${ErrorMessage.ERROR_PREFIX} 로또 번호는 ${count}개여야 합니다.`;
  static LOTTO_DUPLICATE = `${ErrorMessage.ERROR_PREFIX} 로또 번호에 중복된 숫자가 있습니다.`;
  static LOTTO_RANGE = (min, max) => `${ErrorMessage.ERROR_PREFIX} 로또 번호는 ${min}부터 ${max} 사이의 숫자여야 합니다.`;
  
  // WinningNumber 관련
  static WINNING_NUMBER_DELIMITER = `${ErrorMessage.ERROR_PREFIX} 당첨 번호는 쉼표로 구분되어야 합니다.`;
  static WINNING_NUMBER_COUNT = (count) => `${ErrorMessage.ERROR_PREFIX} 당첨 번호는 ${count}개여야 합니다.`;
  static WINNING_NUMBER_NOT_NUMERIC = `${ErrorMessage.ERROR_PREFIX} 당첨 번호는 숫자여야 합니다.`;
  static WINNING_NUMBER_RANGE = (min, max) => `${ErrorMessage.ERROR_PREFIX} 당첨 번호는 ${min}부터 ${max} 사이의 숫자여야 합니다.`;
  static WINNING_NUMBER_DUPLICATE = `${ErrorMessage.ERROR_PREFIX} 당첨 번호에 중복된 숫자가 있습니다.`;
  
  // BonusNumber 관련
  static BONUS_NUMBER_NOT_NUMERIC = `${ErrorMessage.ERROR_PREFIX} 보너스 번호는 숫자여야 합니다.`;
  static BONUS_NUMBER_RANGE = (min, max) => `${ErrorMessage.ERROR_PREFIX} 보너스 번호는 ${min}부터 ${max} 사이의 숫자여야 합니다.`;
  static BONUS_NUMBER_DUPLICATE = `${ErrorMessage.ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`;
  
  // NumberValidator 기본
  static NOT_NUMERIC = `${ErrorMessage.ERROR_PREFIX} 숫자가 아닙니다.`;
  static DUPLICATE = `${ErrorMessage.ERROR_PREFIX} 중복된 숫자가 있습니다.`;
  static RANGE_DEFAULT = (min, max) => `${ErrorMessage.ERROR_PREFIX} ${min}부터 ${max} 사이의 숫자여야 합니다.`;
}

export default ErrorMessage;

