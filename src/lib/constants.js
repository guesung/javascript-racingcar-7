export const ERROR_MESSAGE_DEFAULT = '[ERROR]';

export const ERROR_MESSAGE = {
  USER_INPUT: `${ERROR_MESSAGE_DEFAULT} 입력 도중 알 수 없는 에러가 발생했습니다.`,
  CAR_NAME_INVALID: `${ERROR_MESSAGE_DEFAULT} 1글자 이상, 5글자 이하의 알파벳, 숫자 혹은 언더바(_)로 이루어진 자동차 이름을 입력해주세요`,
  CAR_NAME_DUPLICATION: `${ERROR_MESSAGE_DEFAULT} 중복된 자동차 이름을 입력할 수 없습니다.`,
  NOT_INTEGER: `${ERROR_MESSAGE_DEFAULT} 정수를 입력해주세요.`,
  NOT_POSITIVE: `${ERROR_MESSAGE_DEFAULT} 양수를 입력해주세요.`,
  NOT_NUMBER: `${ERROR_MESSAGE_DEFAULT} 숫자를 입력해주세요.`,
};

export const INPUT_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  WINNER: '최종 우승자 : ',
};
