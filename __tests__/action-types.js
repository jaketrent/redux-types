import actionTypes from '../src/action-types';
import { UniquenessErrorMessage, TypeErrorMessage } from '../src/errors';

const arrayToTest = ['one', 'two', 'three'];
const arrayToTest2 = [...arrayToTest, 77];
const arrayToTest3 = [...arrayToTest, 'two'];
const PREFIX = 'SomePrefix';

describe('actionTypes', () => {
  it('should run without error !', () => {
    const expectedResult = {
      one: 'SomePrefix/one',
      two: 'SomePrefix/two',
      three: 'SomePrefix/three',
    };
    const shouldRunOk = actionTypes(PREFIX, ...arrayToTest);
    expect(shouldRunOk).toEqual(expectedResult);
  });
  it('should throw an error saying args must be strings !', () => {
    expect(() => actionTypes(PREFIX, ...arrayToTest2)).toThrow(
      TypeErrorMessage,
    );
  });
  it('should throw an error saying args must be uniques !', () => {
    expect(() => actionTypes(PREFIX, ...arrayToTest3)).toThrow(
      UniquenessErrorMessage,
    );
  });
});
