import { INPUT_MESSAGE, ERROR_MESSAGE } from './lib/constants.js';
import {
  checkArrayAllUnique,
  readLineAsync,
  splitIntoArray,
  validatePositiveInteger,
} from './lib/utils.js';

class Input {
  static #CAR_NAME_REGEXP = /^\w{1,5}$/;
  static #SEPARATOR = ',';

  #rawCars;
  #rawTryCount;

  #carArray;
  #tryCount;

  async getCarsInput() {
    try {
      this.#rawCars = await readLineAsync(INPUT_MESSAGE.CAR_NAMES);
    } catch (e) {
      throw new Error(ERROR_MESSAGE.USER_INPUT);
    }
  }

  async getTryCountInput() {
    try {
      this.#rawTryCount = await readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    } catch (e) {
      throw new Error(ERROR_MESSAGE.USER_INPUT);
    }
  }

  parseCars() {
    this.#carArray = splitIntoArray(this.#rawCars, Input.#SEPARATOR);
    this.#validateCarArray(this.#carArray);
  }

  parseTryCount() {
    this.#tryCount = +this.#rawTryCount;
    validatePositiveInteger(this.#tryCount);
  }

  #validateCarArray() {
    const isAllCarValid = this.#carArray.every((car) =>
      Input.#CAR_NAME_REGEXP.test(car),
    );
    if (!isAllCarValid) throw new Error(ERROR_MESSAGE.CAR_NAME_INVALID);

    const isAllCarUnique = checkArrayAllUnique(this.#carArray);
    if (!isAllCarUnique) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
  }

  get carArray() {
    return this.#carArray;
  }

  get tryCount() {
    return this.#tryCount;
  }
}

export default Input;
