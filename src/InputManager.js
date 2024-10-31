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

  static async getCarsInput() {
    const rawCars = await readLineAsync(INPUT_MESSAGE.CAR_NAMES);
    const carArray = Input.#parseCars(rawCars);
    Input.#validateCarArray(carArray);

    return carArray;
  }

  static async getTryCountInput() {
    const rawTryCount = await readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    const tryCount = this.#parseTryCount(rawTryCount);
    validatePositiveInteger(tryCount);

    return tryCount;
  }

  static #parseCars(rawCars) {
    const carArray = splitIntoArray(rawCars, Input.#SEPARATOR);
    return carArray;
  }

  static #validateCarArray(carArray) {
    const isAllCarValid = carArray.every((car) =>
      Input.#CAR_NAME_REGEXP.test(car),
    );

    if (!isAllCarValid) throw new Error(ERROR_MESSAGE.CAR_NAME_INVALID);

    const isAllCarUnique = checkArrayAllUnique(carArray);
    if (!isAllCarUnique) throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
  }

  static #parseTryCount(rawTryCount) {
    const tryCount = +rawTryCount;

    return tryCount;
  }
}

export default Input;
