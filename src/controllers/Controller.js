import { MissionUtils } from '@woowacourse/mission-utils';

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
    this.#result = {};

    for (const car of this.#cars) {
      this.#result[car] = 0;
    }

    for (let i = 0; i < this.#tryCount; i += 1) {
      for (const car of this.#cars) {
        const num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (num >= 4) this.#result[car] += 1;

        OutputView.printCarPosition(car, this.#result[car]);
      }
      OutputView.printBlank();
    }

    const winnerLength = Math.max(...Object.values(this.#result));

    const winners = Object.entries(this.#result)
      .filter(([key, value]) => {
        if (value === winnerLength) return true;
        return false;
      })
      .map(([key, value]) => key);

    OutputView.printWinner(winners);
  }
}
