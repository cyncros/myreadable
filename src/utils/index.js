import orderby from "lodash.orderby";

//convert Obj from Redux to Array to be used in Reactjs
export function objToArray(stateObj) {
  let stateArray = [];
  stateObj
    ? (stateArray = Object.keys(stateObj).map(keyValue => stateObj[keyValue]))
    : (stateArray = []);
  return stateArray;
}

//creates a uniqueID for each Post of 4 digits
export function uniqueID() {
  let newId;
  newId = Math.random()
    .toString(4)
    .substr(2, 8);
  return newId;
}

//Gets the TIME from the computer
export function timeToStamp() {
  let time = new Date().getTime();
  return time;
}

//convert long timestamp to human readable
export function changeTimeFormat(timestamp) {
  return new Date(timestamp);
}

export function createObjToSubmit(id, state, timestamp) {
  let objToSubmit = { ...state, id, timestamp };
  return objToSubmit;
}

//order the postsInfo by Id, timestamp and voteScore
export function orderArrayBy(postsInfo, orderByInfo) {
  let arrayOrdered = [];
  arrayOrdered = orderby(postsInfo, [orderByInfo], ["desc"]);
  return arrayOrdered;
}
