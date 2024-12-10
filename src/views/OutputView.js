import { MissionUtils } from '@woowacourse/mission-utils';

import { OUTPUT_MESSAGE } from '../lib/constants.js';

export default class OutputView {
  static printBlank() {
    this.#print('');
  }

  static printExample() {
    this.#print(OUTPUT_MESSAGE.example);
  }

  static #print(message) {
    return MissionUtils.Console.print(message);
  }
}
