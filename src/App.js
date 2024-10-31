import InputManager from './InputManager.js';
import OutputManager from './OutputManager.js';

import Race from './Race.js';

class App {
  async run() {
    const carArray = await InputManager.getCarsInput();
    const tryCount = await InputManager.getTryCountInput();

    const race = new Race(carArray);

    const winnerCarArray = race.run(tryCount);

    OutputManager.printWinner(winnerCarArray);
  }
}

export default App;
