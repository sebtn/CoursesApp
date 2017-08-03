import * as types from '../actions/actionTypes'

export let courseReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [
      ...state,
      //deep copy of course passed
      Object.assign({}, action.course) 
      ]
    default: 
      return state
  }
}