import * as types from '../actions/actionTypes'
import initialState from './initialState'

export let courseReducer = (state = initialState.courses, action) => {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course) // creating a copy
      ]    
    case types.UPDATE_COURSE_SUCCESS:
      return [
        //list of all minus updated elem
        ...state.filter(course => course.id !== action.course.id), 
        Object.assign({}, action.course) 
      ]
    default: 
      return state
  }
}