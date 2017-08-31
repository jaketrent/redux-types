import {
  TypeError,
  UnicityError
} from './errors.js';

const isString = arg => typeof arg === 'string' || arg instanceof String;

const ThrowErrorIfNotString = element => {
  if (!isString(element)) throw new Error(TypeError);
};

const ThrowErrorIfValuesNotUnique = array => {
  if (array.length !== new Set(array).size) {
    throw new Error(UnicityError);
  }
};

const actionTypesWithArrays = (namespace, constants) => {
  ThrowErrorIfValuesNotUnique(constants);
  return Object.freeze(
    constants.reduce((obj, constant) => {
      ThrowErrorIfNotString(constant);
      obj[constant] = `${namespace}/${constant}`;
      return obj;
    }, {}),
  );
}

export default function actionTypes(namespace, ...constants) {
  console.warn(
    'For the next major release, the function will expect only two args : 1) prefix : <String> 2) types: Array<String> ',
  );
  actionTypesWithArrays(namespace, constants)
}