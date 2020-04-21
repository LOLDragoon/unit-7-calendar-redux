import * as types from '../constants/actionTypes';
import store from '../store';

const initialState = {
  schedule: [],
}

const scheduleReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.CREATE_SCHEDULE:
      // logic for dealing with creating schedule
      break;
  
    default:
      return state;
  }

}