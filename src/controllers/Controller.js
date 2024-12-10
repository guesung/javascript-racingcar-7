import { MissionUtils } from '@woowacourse/mission-utils';

import { MOVE_STANDARD } from '../lib/constants.js';
import { CarModel } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

export default class Controller {
  #carNames;
  #tryCount;
  #cars;

  async init() {
    this.#carNames = await InputView.readCars();
    this.#tryCount = await InputView.readTryCount();
  }

  run() {
    this.initialGame();
    this.runGame();
    const winners = this.getWinners();
    OutputView.printWinner(winners);
  }

  initialGame() {
    this.#cars = [];
    for (const carName of this.#carNames) {
      this.#cars.push(new CarModel(carName));
    }
  }

  runGame() {
    for (let i = 0; i < this.#tryCount; i += 1) {
      this.runOneRound();
    }
  }

  runOneRound() {
    for (const car of this.#cars) {
      car.go();
    }
    OutputView.printBlank();
  }

  getWinners() {
    const winnerPosition = Math.max(...this.#cars.map((car) => car.position));
    return this.#cars.filter((car) => car.position === winnerPosition).map((car) => car.name);
  }
}
