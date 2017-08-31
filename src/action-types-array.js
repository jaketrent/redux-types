import { TypeError, UnicityError } from './errors.js';
// ------------------------------------ //
const isString = arg => typeof arg === 'string' || arg instanceof String;
// ------------------------------------ //
const StringOrThrow = element => {
  if (!isString(element)) throw new Error(TypeError);
};
// ------------------------------------ //
const RaiseErrorIfNotUnique = array => {
  if (array.length !== new Set(array).size) {
    throw new Error(UnicityError);
  }
};
// ------------------------------------ //
const actionTypesWithArray = (namespace, constants) => {
  RaiseErrorIfNotUnique(constants);
  return Object.freeze(
    constants.reduce((obj, constant) => {
      StringOrThrow(constant);
      obj[constant] = `${namespace}/${constant}`;
      return obj;
    }, {}),
  );
};
export default actionTypesWithArray;

// ------------------------------------ //
// same as actual function without the console.warn, to keep the test log clean
// only imported in __tests__ , not available on the package
export const testActionTypes = (namespace, ...constants) =>
  actionTypesWithArray(namespace, constants);
// ------------------------------------ //
