export const INPUT_MESSAGE = {
  carName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  tryCount: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  winner: '최종 우승자 : ',
};

export const ERROR_MESSAGE_DEFAULT = '[ERROR]';
export const ERROR_MESSAGE = {
  carLength: `${ERROR_MESSAGE_DEFAULT} 0개 이상의 차 이름을 입력해주세요!`,
  carNameLength: `${ERROR_MESSAGE_DEFAULT} 1자 이상 5자 이하의 차 이름을 입력해주세요!`,
  positiveInteger: `${ERROR_MESSAGE_DEFAULT} 양의 정수를 입력해주세요!`,
};

export const SEPARATOR = ',';
export const CAR_POSITION = '-';
