import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'
import {createCourse} from '../actions/index'

class Courses extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: { title: '' }
    }
  }

/*--------------------------------------------------*/
  onTitleChange = (event) => {
    event.preventDefault()
    const course = this.state.course
    course.title = event.target.value
    this.setState({ course: course })
  }

/*--------------------------------------------------*/
  onClickSave = () => {
    this.props.createCourse(this.state.course)
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
      <div>
        <Header />
        <h1>This is courses</h1>
        { courses.map(this.renderCourse) }
        <h3>Add a course</h3>
        <input 
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input 
          type="Submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    )
  }
}

/*--------------------------------------------------*/
Courses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  return { courses: state.courses }
}

/*--------------------------------------------------*/
let mapDispatchToProps = (dispatch) => {
  return {
    createCourse: course => dispatch(createCourse(course))
  }
}
/*--------------------------------------------------*/
export default connect(mapStateToProps, mapDispatchToProps)(Courses)
