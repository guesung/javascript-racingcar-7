import {
  getKeyArrayHasTargetValueInMap,
  getMapFilledZero,
  getMaxValueInMap,
  pickNumberInRange,
} from './lib/utils.js';
import OutputManager from './OutputManager.js';

class Race {
  static #MIN_RANDOM = 0;
  static #MAX_RANDOM = 9;
  static #MOVE_FORWARD_THRESHOLD = 4;
  static #FORWARD_STEP = 1;

  #carArray;
  #tryCount;
  #carTraceMap;

  constructor(carArray, tryCount) {
    this.#carArray = carArray;
    this.#tryCount = tryCount;

    this.#carTraceMap = getMapFilledZero(this.#carArray);
  }

  run() {
    for (let round = 0; round < this.#tryCount; round += 1) {
      this.#runOneRound();
    }
    return this.#winnerCarArray;
  }

  #runOneRound() {
    this.#carArray.forEach((car) => {
      const newPosition = Race.#getNewPosition(this.#carTraceMap.get(car));
      this.#carTraceMap.set(car, newPosition);
      OutputManager.printCarPosition(car, newPosition);
    });
  }

  static #getNewPosition(currentPosition) {
    const randomNum = pickNumberInRange(Race.#MIN_RANDOM, Race.#MAX_RANDOM);
    const isMoveForward = Race.#getIsMoveForward(randomNum);

    if (isMoveForward) return currentPosition + Race.#FORWARD_STEP;
    return currentPosition;
  }

  static #getIsMoveForward(num) {
    return num >= Race.#MOVE_FORWARD_THRESHOLD;
  }

  get #winnerCarArray() {
    const maxTrace = getMaxValueInMap(this.#carTraceMap);
    const winnerCarArray = getKeyArrayHasTargetValueInMap(
      this.#carTraceMap,
      maxTrace,
    );
    return winnerCarArray;
  }
}

export default Race;
