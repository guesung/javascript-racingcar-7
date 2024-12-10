import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../src/lib/testUtils.js';

describe('자동차 경주', () => {
  describe('기능 테스트', () => {
    test('', async () => {
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const inputs = ['pobi,woni', '1'];
      const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe('예외 테스트', () => {
    test('5글자 이상을 입력할 경우 예외를 처리한다.', async () => {
      const inputs = ['pobi,javaji'];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('0글자를 입력할 경우 예외를 처리한다.', async () => {
      const inputs = [',javaji'];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('0개를 입력할 경우 예외를 처리한다.', async () => {
      const inputs = [''];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수에 0을 입력한 경우 예외를 처리한다.', async () => {
      const inputs = ['pobi,woni', 0];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수에 음수를 입력한 경우 예외를 처리한다.', async () => {
      const inputs = ['pobi,woni', 0];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });

    test('시도 횟수에 소수를 입력한 경우 예외를 처리한다.', async () => {
      const inputs = ['pobi,woni', 1.1];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
