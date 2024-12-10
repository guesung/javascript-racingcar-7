import { MissionUtils } from '@woowacourse/mission-utils';

import { CAR_POSITION, OUTPUT_MESSAGE, SEPARATOR } from '../lib/constants.js';

export default class OutputView {
  static printBlank() {
    this.#print();
  }

  static printCarPosition(car, position) {
    this.#print(`${car} : ${CAR_POSITION.repeat(position)}`);
  }

  static printWinner(winners) {
    this.#print(`${OUTPUT_MESSAGE.winner}${winners.join(`${SEPARATOR} `)}`);
  }

  static #print(message) {
    return MissionUtils.Console.print(message);
  }
}
