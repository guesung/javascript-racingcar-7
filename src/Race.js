import {
  getKeyArrayHasSameValueInMap,
  getMapFilledZeroValue,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  print,
} from "./utils";

class Race {
  static #MIN_RANDOM = 0;
  static #MAX_RANDOM = 9;
  static MOVE_FORWARD_THRESHOLD = 4;
  static #TRACE_CHARACTER = "-";

  #carNameArray;
  #tryCount;
  #carTraceMap;

  constructor(carNameArray, tryCount) {
    this.#carNameArray = carNameArray;
    this.#tryCount = tryCount;

    this.#carTraceMap = getMapFilledZeroValue(this.#carNameArray);
  }

  run() {
    for (let i = 0; i < this.#tryCount; i++) {
      for (const carName of this.#carNameArray) {
        const newPosition = this.moveCarForward(this.#carTraceMap.get(carName));
        this.#carTraceMap.set(carName, newPosition);
        this.printCarPosition(carName, newPosition);
      }
    }
  }

  moveCarForward(currentPosition) {
    const randomNum = pickNumberInRange(Race.#MIN_RANDOM, Race.#MAX_RANDOM);
    const isMoveForward = this.getMoveForward(randomNum);
    if (isMoveForward) return currentPosition + 1;
    return currentPosition;
  }

  getMoveForward(num) {
    return num >= 4;
  }

  printCarPosition(carName, position) {
    const repeatedTraceChracter = getRepeatedString(
      Race.#TRACE_CHARACTER,
      position
    );

    print(`${carName} : ${repeatedTraceChracter}`);
  }

  get getWinnerArray() {
    const maxTrace = getMaxValueInMap(this.#carTraceMap);
    const winnerCarArray = getKeyArrayHasSameValueInMap(
      this.#carTraceMap,
      maxTrace
    );
    return winnerCarArray;
  }
}

export default Race;
