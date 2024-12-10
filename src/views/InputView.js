import { MissionUtils } from '@woowacourse/mission-utils';

import { InputParser, InputValidator } from '../helpers/index.js';
import { INPUT_MESSAGE } from '../lib/constants.js';

export default class InputView {
  static async readExample() {
    const rawInput = await this.#readLineAsync(INPUT_MESSAGE.example);
    const input = InputParser.parseUserInput(rawInput);
    InputValidator.validateUserInput(input);

    return input;
  }

  static #readLineAsync(message) {
    return MissionUtils.Console.readLineAsync(message);
  }
}
