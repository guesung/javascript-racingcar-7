import { MissionUtils } from '@woowacourse/mission-utils';

import { MOVE_STANDARD } from '../lib/constants.js';
import OutputView from '../views/OutputView.js';

export default class CarModel {
  name;
  position;

  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    const num = CarModel.getRaceRandomNumber();
    if (num >= MOVE_STANDARD) this.position += 1;

    OutputView.printCarPosition(this.name, this.position);
  }

  static getRaceRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}
