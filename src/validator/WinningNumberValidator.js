class WinningNumberValidator {
  static parse(input) {
    if (!input.includes(",")) {
      throw new Error("[ERROR] 당첨 번호는 쉼표로 구분되어야 합니다.");
    }
    
    return input.split(",").map((number) => Number(number.trim()));
  }
}

export default WinningNumberValidator;

