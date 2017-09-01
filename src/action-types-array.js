import { UniquenessErrorMessage, TypeErrorMessage } from './errors';

const isString = arg => typeof arg === 'string' || arg instanceof String;

const StringOrThrow = element => {
  if (!isString(element)) throw new Error(TypeErrorMessage);
};

const RaiseErrorIfNotUnique = array => {
  const hash = {};
  let duplicate = false;
  for (let i = 0; i < array.length && !duplicate; i++) {
    if (hash[array[i]]) {
      duplicate = true;
    }
    hash[array[i]] = true;
  }
  if (duplicate) throw new Error(UniquenessErrorMessage);
};

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
