import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from './Header'
import CourseForm from './CourseForm'
import {saveCourse} from '../actions/index'

class ManageCourse extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }
  }

/*--------------------------------------------------*/
  updateCourseState = (event) => {
    let field = event.target.name
    let course = this.state.course
    course[field] = event.target.value
    return this.setState( {course: course} )
  }

/*--------------------------------------------------*/
  saveCourse = (event) => {
    event.preventDefault()
    this.props.saveCourse(this.state.course)
  }

/*--------------------------------------------------*/
  render() {
    return (
      <div className="manage-course-container container-fluid">
        <Header />
        <CourseForm 
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors} 
          onChange={this.updateCourseState} 
          onSave={this.saveCourse}/>
      </div>
    )
  }
}

/*--------------------------------------------------*/
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  let course = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
  }
  const listAuthorsFormatted = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  })
  return { 
    course: course,
    authors: listAuthorsFormatted
 }
}

/*--------------------------------------------------*/
let mapDispatchToProps = (dispatch) => {
  return {
    saveCourse: bindActionCreators(saveCourse, dispatch)
    
  }
}

/*--------------------------------------------------*/
export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse)
