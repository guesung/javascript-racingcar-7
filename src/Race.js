import Car from './Car.js';

class Race {
  #carModelArray;

  constructor(carArray) {
    this.#carModelArray = carArray.map((car) => new Car(car));
  }

  run(tryCount) {
    for (let round = 0; round < tryCount; round += 1) {
      this.#runOneRound();
    }

    return this.#winnerCarArray;
  }

  #runOneRound() {
    this.#carModelArray.forEach((carModel) => {
      carModel.moveForward();
      carModel.printPosition();
    });
  }

  get #winnerCarArray() {
    const maxPosition = this.#maxPosition;

    const winnerCarArray = this.#carModelArray
      .filter((carModel) => carModel.position === maxPosition)
      .map((carModel) => carModel.name);

    return winnerCarArray;
  }

  get #maxPosition() {
    return Math.max(
      ...this.#carModelArray.map((carModel) => carModel.position),
    );
  }
}

export default Race;
