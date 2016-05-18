import { ACTION } from '../constants/ActionTypes';

const INITAL_STATE = {}

//use Object.assign({}, state, {})
let reducer = function(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'ACTION':
      return state;
    default: 
      return state;
  }
}

export default reducer