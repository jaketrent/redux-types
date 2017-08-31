import actionTypes from '../src/action-types';
import { TypeError, UnicityError } from '../src/errors';
const arrayToTest = ['iijij', 'ijijijj', 'kogifkp'];
const arrayToTest2 = [
  ...arrayToTest,
  {
    hoi: 'ok',
  },
];
const arrayToTest3 = [...arrayToTest, 'iijij'];
const PREFIX = 'SomePrefix';

describe('hey', () => {
  it('should run without error !', () => {
    const shouldRunOk = actionTypes(PREFIX, ...arrayToTest);
    console.warn(shouldRunOk);
    expect(shouldRunOk);
  });
  it('should throw an error saying args must be strings !', () => {
    expect(() => actionTypes(PREFIX, ...arrayToTest2)).toThrow(TypeError);
  });
  it('should throw an error saying args must be uniques !', () => {
    expect(() => actionTypes(PREFIX, ...arrayToTest3)).toThrow(UnicityError);
  });
});
