export function objToArray(stateObj) {
  const stateArray = Object.keys(stateObj)
    .filter(id => id !== 'loading')
    .map(keyValue => stateObj[keyValue])
  return stateArray
}
