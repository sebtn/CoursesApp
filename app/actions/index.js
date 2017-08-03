import * as types from './actionTypes'

export let createCourse = (course) => {
  return {
    type: types.CREATE_COURSE,
    course
  }
}