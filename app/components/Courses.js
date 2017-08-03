import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from './Header'
import {createCourse} from '../actions/index'
import CourseList from './CourseList'

class Courses extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
  }

/*--------------------------------------------------*/
  renderCourse = (course, index) => {
    return (
      <div key={index}>
        {course.title}
      </div>
    )
  }

/*--------------------------------------------------*/
  render() {
    const {courses} = this.props
    return (
      <div className="courses-container container-fluid">
        <Header />
        <h1 className="courses-title">This is courses</h1>
         <CourseList courses={courses} /> 
      </div>
    )
  }
}

/*--------------------------------------------------*/
Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse:  PropTypes.func.isRequired
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  return { courses: state.courses }
}

/*--------------------------------------------------*/
let mapDispatchToProps = (dispatch) => {
  return {
    createCourse: bindActionCreators(createCourse, dispatch)
  }
}

/*--------------------------------------------------*/
export default connect(mapStateToProps)(Courses)
