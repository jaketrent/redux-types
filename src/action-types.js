import {
  TypeErrorMessage,
  ConstantsTypeErrorMessage,
  NamespaceTypeErrorMessage,
} from './errors';

import { isString, isArray } from './types-testers';
import { matchTypeOrThrow, raiseErrorIfNotUnique } from './error-raisers';

const actionTypes = (namespace, constants) => {
  matchTypeOrThrow(namespace, isString, NamespaceTypeErrorMessage);
  matchTypeOrThrow(constants, isArray, ConstantsTypeErrorMessage);
  raiseErrorIfNotUnique(constants);
  return Object.freeze(
    constants.reduce((obj, constant) => {
      matchTypeOrThrow(constant, isString, TypeErrorMessage);
      obj[constant] = `${namespace}/${constant}`;
      return obj;
    }, {}),
  );
};
export default actionTypes;
