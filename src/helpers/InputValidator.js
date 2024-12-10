import { ERROR_MESSAGE } from '../lib/constants.js';

export default class InputValidator {
  static validateCarNames(cars) {
    this.#validateCarNameLength(cars);
    this.#validateCarLength(cars);
  }

  static #validateCarNameLength(cars) {
    cars.forEach((car) => {
      if (car.length === 0 || car.length > 5) throw new Error(ERROR_MESSAGE.carNameLength);
    });
  }

  static #validateCarLength(cars) {
    if (cars.length === 0) throw new Error(ERROR_MESSAGE.carLength);
  }

  static validateTryCount(tryCount) {
    this.#validatePositiveInteger(tryCount);
  }

  static #validatePositiveInteger(number) {
    if (!Number.isNaN(number) && number > 0 && Number.isInteger(number)) return;
    throw new Error(ERROR_MESSAGE.positiveInteger);
  }
}
