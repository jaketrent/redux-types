import actionTypesWithArray from './action-types-array';

export default function actionTypes(namespace, ...constants) {
  console.warn(
    'For the next major release, the function will expect only two args : 1) namespace : <String> 2) types: Array<String> ',
  );
  return actionTypesWithArray(namespace, constants);
}
