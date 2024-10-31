import { pickNumberInRange } from './lib/utils';
import OutputManager from './OutputManager';

class Car {
  static #MIN_RANDOM = 0;
  static #MAX_RANDOM = 9;
  static #MOVE_FORWARD_THRESHOLD = 4;
  static #FORWARD_STEP = 1;

  #name;
  #position;

  constructor(name, position = 0) {
    this.#position = position;
    this.#name = name;
  }

  moveForward() {
    const randomNum = pickNumberInRange(Car.#MIN_RANDOM, Car.#MAX_RANDOM);
    const isMoveForward = randomNum >= Car.#MOVE_FORWARD_THRESHOLD;

    if (isMoveForward) this.#position += Car.#FORWARD_STEP;
  }

  printPosition() {
    OutputManager.printCarPosition(this.#name, this.#position);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
