import { SEPARATOR } from '../lib/constants.js';

export default class InputParser {
  static parseCarNames(rawCarNAmes) {
    return rawCarNAmes.split(SEPARATOR);
  }

  static parseTryCount(rawTryCount) {
    return Number(rawTryCount);
  }
}
