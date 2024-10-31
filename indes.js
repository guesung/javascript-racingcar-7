import { MissionUtils } from '@woowacourse/mission-utils';

// const a = await MissionUtils.Console.readLineAsync('입력하시오\n');

function validate(value) {
  console.log(!value);
}

validate('a');
validate('[]');
validate('false');
validate('true');
validate('a');
validate('');
