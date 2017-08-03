export let createCourse = (course) => {
  return {
    type: "CREATE_COURSE",
    course
  }
}