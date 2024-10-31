import { OUTPUT_MESSAGE } from './lib/constants';
import { getRepeatedString, print } from './lib/utils';

class OutputManager {
  static #TRACE_CHARACTER = '-';

  static printCarPosition(car, position) {
    const repeatedTraceChracter = getRepeatedString(
      OutputManager.#TRACE_CHARACTER,
      position,
    );

    print(`${car} : ${repeatedTraceChracter}`);
  }

  static printWinner(winnerCarArray) {
    print(`${OUTPUT_MESSAGE.WINNER}${winnerCarArray.join(', ')}`);
  }
}

export default OutputManager;
