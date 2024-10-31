import { OUTPUT_MESSAGE } from './lib/constants.js';
import { print } from './lib/utils.js';
import InputManager from './InputManager.js';
import Race from './Race.js';

class App {
  async run() {
    const carArray = await InputManager.getCarsInput();
    const tryCount = await InputManager.getTryCountInput();

    const race = new Race(carArray, tryCount);

    const winnerCarArray = race.run();

    this.#printOutput(winnerCarArray);
  }

  #printOutput(winnerCarArray) {
    print(`${OUTPUT_MESSAGE.WINNER}${winnerCarArray.join(', ')}`);
  }
}

export default App;
