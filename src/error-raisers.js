import { UniquenessErrorMessage } from './errors';

export const matchTypeOrThrow = (element, testFunction, message) => {
  if (!testFunction(element)) throw new Error(message);
};

export const raiseErrorIfNotUnique = array => {
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
