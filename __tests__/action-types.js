import { testActionTypes } from '../src/action-types-array';
import { TypeError, UnicityError } from '../src/errors';
// ------------------------------------ //
const arrayToTest = ['one', 'two', 'three'];
const arrayToTest2 = [...arrayToTest, 77];
const arrayToTest3 = [...arrayToTest, 'two'];
const PREFIX = 'SomePrefix';
// ------------------------------------ //
describe('hey', () => {
  it('should run without error !', () => {
    const expectedResult = {
      one: 'SomePrefix/one',
      two: 'SomePrefix/two',
      three: 'SomePrefix/three',
    };
    const shouldRunOk = testActionTypes(PREFIX, ...arrayToTest);
    expect(shouldRunOk).toEqual(expectedResult);
  });
  it('should throw an error saying args must be strings !', () => {
    expect(() => testActionTypes(PREFIX, ...arrayToTest2)).toThrow(TypeError);
  });
  it('should throw an error saying args must be uniques !', () => {
    expect(() => testActionTypes(PREFIX, ...arrayToTest3)).toThrow(
      UnicityError,
    );
  });
});
