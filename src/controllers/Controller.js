import { CarModel } from '../models/index.js';
import { InputView, OutputView } from '../views/index.js';

export default class Controller {
  #cars;
  #tryCount;

  async init() {
    const carNames = await InputView.readCars();
    this.#tryCount = await InputView.readTryCount();

    this.#cars = carNames.map((carName) => new CarModel(carName));
  }

  run() {
    this.startRace();
    const winners = this.getWinners();
    OutputView.printWinner(winners);
  }

  startRace() {
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
