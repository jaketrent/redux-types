import actionTypesWithArray from './action-types-array';

export default function actionTypes(namespace, ...constants) {
  return actionTypesWithArray(namespace, constants);
}
