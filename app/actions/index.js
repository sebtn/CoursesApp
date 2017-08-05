import * as types from './actionTypes'
import CourseApi from '../api/mockCourseApi'
import AuthorApi from '../api/mockAuthorApi'

export let loadCoursesSuccess = (courses) => {
    return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  }
}
/*---------------------------------------------------------------*/
export let loadAuthorsSucces = (authors) => {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  }
}

/*A-sync thunks*/
/*---------------------------------------------------------------*/
export let loadCourses = () => {
  return (dispatch) => {
    return CourseApi.getAllCourses()
    .then( courses => { dispatch(loadCoursesSuccess(courses)) })
    .catch( error => { throw(error) })
  }
}

/*---------------------------------------------------------------*/
export let loadAuthors = () => {
  return (dispatch) => {
    return AuthorApi.getAllAuthors()
    .then( authors => { dispatch(loadAuthorsSucces(authors)) })
    .catch( error => { throw(error) })
  } 
}