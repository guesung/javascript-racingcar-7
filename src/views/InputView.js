import { MissionUtils } from '@woowacourse/mission-utils';

import { InputParser, InputValidator } from '../helpers/index.js';
import { INPUT_MESSAGE } from '../lib/constants.js';

export default class InputView {
  static async readCars() {
    const rawInput = await this.#readLineAsync(INPUT_MESSAGE.carName);
    const carNames = InputParser.parseCarNames(rawInput);
    InputValidator.validateCarNames(carNames);

    return carNames;
  }

  static async readTryCount() {
    const rawTryCount = await this.#readLineAsync(INPUT_MESSAGE.tryCount);
    const tryCount = InputParser.parseTryCount(rawTryCount);
    InputValidator.validateTryCount(tryCount);

    return tryCount;
  }

  static #readLineAsync(message) {
    return MissionUtils.Console.readLineAsync(message);
  }
}
