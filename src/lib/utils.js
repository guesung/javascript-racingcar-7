import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constants.js';

export const readLineAsync = (message) =>
  MissionUtils.Console.readLineAsync(message);

export const print = (message) => {
  MissionUtils.Console.print(message);
};

export const pickNumberInRange = (start, end) =>
  MissionUtils.Random.pickNumberInRange(start, end);

export const splitIntoArray = (str, separator) => str.split(separator);

export const getIsNumeric = (num) =>
  typeof num === 'number' && !Number.isNaN(Number(num));

export const validatePositiveInteger = (num) => {
  const isNumeric = getIsNumeric(num);
  if (!isNumeric) throw new Error(ERROR_MESSAGE.NOT_NUMBER);

  const isPositiveNumeric = num > 0;
  if (!isPositiveNumeric) throw new Error(ERROR_MESSAGE.NOT_POSITIVE);

  const isInteger = Number.isInteger(num);
  if (!isInteger) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
};

export const getMapFilledZero = (array) =>
  new Map(array.map((item) => [item, 0]));

export const getRepeatedString = (str, repeatNum) => str.repeat(repeatNum);

export const getMaxValueInMap = (map) => Math.max(...map.values());

export const getKeyArrayHasTargetValueInMap = (map, targetValue) =>
  Array.from(map.entries())
    .filter(([_, value]) => value === targetValue)
    .map(([key]) => key);

export const checkArrayAllUnique = (array) =>
  array.length === [...new Set(array)].length;
