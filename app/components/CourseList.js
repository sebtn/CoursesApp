import React from 'react'
import PropTypes from 'prop-types'

import CourseItem from './CourseItem'

const courseList = ({courses})  => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => 
            <CourseItem key={course.id} course={course} />
          )}
        </tbody>
      </table>
    </div>
  )
}

courseList.propTypes = {
  courses: PropTypes.array.isRequired
}

export default courseList