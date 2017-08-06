import * as types from './actionTypes'
import CourseApi from '../api/mockCourseApi'
import AuthorApi from '../api/mockAuthorApi'

/*AJAX action */
/*---------------------------------------------------------------*/
export let beginAjaxCall = () => {
  return {
    type: types.BEGIN_AJAX_CALL
  }
}
export let ajaxCallError = () => {
  return {
    type: types.AJAX_CALL_ERROR
  }
}

/*Courses*/
/*---------------------------------------------------------------*/
export let loadCoursesSuccess = (courses) => {
    return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  }
}

/*Course*/
/*---------------------------------------------------------------*/
export let updateCourseSuccess = (course) => {
    return {
    type: types.UPDATE_COURSE_SUCCESS,
    course
  }
}

/*---------------------------------------------------------------*/
export let createCourseSuccess = (course) => {
    return {
    type: types.CREATE_COURSE_SUCCESS,
    course
  }
}


/*Authors*/
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
    dispatch(beginAjaxCall())
    return CourseApi.getAllCourses()
    .then( courses => { dispatch(loadCoursesSuccess(courses)) })
    .catch( error => { throw(error) })
  }
}

/*---------------------------------------------------------------*/
export let saveCourse = (course) => {
  return (dispatch) => {
    dispatch(beginAjaxCall())
    return CourseApi.saveCourse(course)
    .then( course => {
      course.id ? dispatch( updateCourseSuccess(course) ) :
      dispatch( createCourseSuccess(course) )
    })
    .catch( error => {
      dispatch(ajaxCallError(error))
      throw(error) 
   })
  }
}

/*---------------------------------------------------------------*/
export let loadAuthors = () => {
  return (dispatch) => {
    dispatch(beginAjaxCall())
    return AuthorApi.getAllAuthors()
    .then( authors => { dispatch(loadAuthorsSucces(authors)) })
    .catch( error => { throw(error) })
  } 
}