import { OUTPUT_MESSAGE } from './lib/constants.js';
import { print } from './lib/utils.js';
import Input from './Input.js';
import Race from './Race.js';

class App {
  #input;
  #winnerCarArray;

  constructor() {
    this.#input = new Input();
  }

  async run() {
    await this.#getInput();
    this.#runRace();
    this.#printOutput();
  }

  async #getInput() {
    await this.#input.getCarsInput();
    await this.#input.getTryCountInput();
    this.#input.parseCars();
    this.#input.parseTryCount();
  }

  #runRace() {
    const race = new Race(this.#input.carArray, this.#input.tryCount);

    this.#winnerCarArray = race.run();
  }

  #printOutput() {
    print(`${OUTPUT_MESSAGE.WINNER}${this.#winnerCarArray.join(', ')}`);
  }
}

export default App;
