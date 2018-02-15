import {FETCH_WEATHER} from '../actions/index';


export default function (state = [], action) {
  // console.log('Action received: ', action);
  switch (action.type) {
    case FETCH_WEATHER :
    // the result will be an array of cities

    // ES6 : return state.concat([ action.payload.data ]);
    // NEVER MODIFY the STATE DIRECTLY
    // CREATE A NEW OBJECT
    return [ action.payload.data, ...state]; // = [ city, city, city ]
  }
  return state;
}
