import { MissionUtils } from '@woowacourse/mission-utils';

import { MOVE_STANDARD } from '../lib/constants.js';
import { OutputView } from '../views/index.js';

export default class CarModel {
  name;
  position;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    const num = this.#getRaceRandomNumber();
    if (num >= MOVE_STANDARD) this.#goForward();

    OutputView.printCarPosition(this.name, this.position);
  }

  #getRaceRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  #goForward() {
    this.position += 1;
  }
}
