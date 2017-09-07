import actionTypes from '../src/action-types';
import {
  UniquenessErrorMessage,
  TypeErrorMessage,
  ConstantsTypeErrorMessage,
  NamespaceTypeErrorMessage,
} from '../src/errors';
const arrayToTest = ['one', 'two', 'three'];
const arrayToTest2 = [...arrayToTest, 77];
const arrayToTest3 = [...arrayToTest, 'two'];
const PREFIX = 'SomePrefix';
const WRONG_PREFIX = 44;

describe('actionTypes', () => {
  it('should throw an error saying namespace must be a string !', () => {
    expect(() => actionTypes(WRONG_PREFIX, arrayToTest2)).toThrow(
      NamespaceTypeErrorMessage,
    );
  });
  it('should throw an error saying constants arg must be an Array !', () => {
    expect(() => actionTypes(PREFIX, ...arrayToTest)).toThrow(
      ConstantsTypeErrorMessage,
    );
  });
  it('should throw an error saying args must be strings !', () => {
    expect(() => actionTypes(PREFIX, arrayToTest2)).toThrow(TypeErrorMessage);
  });
  it('should throw an error saying args must be uniques !', () => {
    expect(() => actionTypes(PREFIX, arrayToTest3)).toThrow(
      UniquenessErrorMessage,
    );
  });
  it('should run without error !', () => {
    const expectedResult = {
      one: 'SomePrefix/one',
      two: 'SomePrefix/two',
      three: 'SomePrefix/three',
    };
    const shouldRunOk = actionTypes(PREFIX, arrayToTest);
    expect(shouldRunOk).toEqual(expectedResult);
  });
});
