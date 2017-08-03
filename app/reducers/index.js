import {combineReducers} from 'redux'

import {courseReducer} from './courseReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  courses: courseReducer
})

export default rootReducer