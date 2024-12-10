import { Controller } from './controllers/index.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.init();
    controller.run();
  }
}

export default App;
