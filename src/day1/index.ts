import { Day } from "../day";

class Day1 extends Day {
  constructor() {
    super(1);
  }

  solveForPartOne(input: string): string {
    return input
      .split("\r\n")
      .map((element) => this.firstAndLastDigit(element))
      .map((e) => parseInt(e))
      .reduce((a, b) => a + b, 0)
      .toString();
  }

  firstAndLastDigit(input: string) {
    const digitArray = input.split("").filter((value) => this.isNumeric(value));
    return digitArray[0] + digitArray[digitArray.length - 1];
  }

  isNumeric = (num: any) =>
    (typeof num === "number" ||
      (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num as number);

  solveForPartTwo(input: string): string {
    const splicedInput = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reduce(
      (acc, word, index) => acc.replaceAll(word, word + (index + 1) + word),
      input
    );
    return this.solveForPartOne(splicedInput);
  }
}

export default new Day1();
