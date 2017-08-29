export default function actionTypes(namespace, ...constants) {
  return Object.freeze(
    constants.reduce((obj, constant) => {
      obj[constant] = `${namespace}/${constant}`;
      return obj;        
    }, {})
  )
}
