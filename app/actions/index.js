import * as types from './actionTypes'
import courseApi from '../api/mockCourseApi'

export let loadCoursesSuccess = (courses) => {
    return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  }
}

/*A-sync thunks*/
/*---------------------------------------------------------------*/
export let loadCourses = () => {
  return (dispatch) => {
    return courseApi.getAllCourses()
    .then( courses => { dispatch(loadCoursesSuccess(courses)) })
    .catch( error => { throw(error) })
  }
}