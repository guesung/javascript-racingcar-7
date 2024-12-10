import { MissionUtils } from '@woowacourse/mission-utils';

import { MOVE_STANDARD } from '../lib/constants.js';
import { InputView, OutputView } from '../views/index.js';

export default class Controller {
  #cars;
  #tryCount;
  #result;

  async init() {
    this.#cars = await InputView.readCars();
    this.#tryCount = await InputView.readTryCount();
  }

  run() {
    this.initialGame();
    this.runGame();
    const winners = this.getWinners();
    OutputView.printWinner(winners);
  }

  runGame() {
    for (let i = 0; i < this.#tryCount; i += 1) {
      this.runOneGame();
    }
  }

  initialGame() {
    this.#result = {};
    for (const car of this.#cars) {
      this.#result[car] = 0;
    }
  }

  runOneGame() {
    for (const car of this.#cars) {
      const num = Controller.getRaceRandomNumber();
      if (num >= MOVE_STANDARD) this.#result[car] += 1;

      OutputView.printCarPosition(car, this.#result[car]);
    }
    OutputView.printBlank();
  }

  getWinners() {
    const winnerPosition = Math.max(...Object.values(this.#result));
    return Object.entries(this.#result)
      .filter(([_, position]) => position === winnerPosition)
      .map(([name]) => name);
  }

  static getRaceRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}
