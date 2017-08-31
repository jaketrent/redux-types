import { TypeError, UnicityError } from './errors.js';

const isString = arg => typeof arg === 'string' || arg instanceof String;

const StringOrThrow = element => {
  if (!isString(element)) throw new Error(TypeError);
};

const RaiseErrorIfNotUnique = array => {
  if (array.length !== new Set(array).size) {
    throw new Error(UnicityError);
  }
};

export default function actionTypes(namespace, ...constants) {
  console.warn(
    'For the next major release, the function will expect only two args : 1) prefix : <String> 2) types: Array<String> ',
  );
  RaiseErrorIfNotUnique(constants);
  return Object.freeze(
    constants.reduce((obj, constant) => {
      StringOrThrow(constant);
      obj[constant] = `${namespace}/${constant}`;
      return obj;
    }, {}),
  );
}
