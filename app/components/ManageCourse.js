import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import toastr from'toastr'

import Header from './Header'
import CourseForm from './CourseForm'
import {saveCourse} from '../actions/index'

export class ManageCourse extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
    this.state = {
      course: Object.assign({}, props.course),
      errors: {}, 
      saving: false
    }
  }

/*--------------------------------------------------*/
  componentWillReceiveProps = (nextProps) => {
    if (this.props.course.id != nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) })
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
    this.setState({ saving: true })
    this.props.saveCourse(this.state.course)
    .then( () => this.redirect() ) // other way of re routing
    .catch(error => {
      toastr.error(error)
      this.setState({ saving: false })
    })
  }

/*--------------------------------------------------*/
  redirect = () => {
    this.setState({ saving: false })
    toastr.success('Course saved')
    this.context.router.push('/courses')
  }

/*--------------------------------------------------*/
  render() {
    return (
      <div className="manage-course-container container-fluid">
        <Header loading={this.props.loading}/>
        <CourseForm 
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors} 
          onChange={this.updateCourseState} 
          onSave={this.saveCourse}
          saving={this.state.saving} />
      </div>
    )
  }
}

/*--------------------------------------------------*/
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  saveCourse: PropTypes.func.isRequired // from actions
}

/*--------------------------------------------------*/
/*Using react router context 
to be available this.context.router avoiding
boilerplate, used to re route in this case */
ManageCourse.contextTypes = {
  router: PropTypes.object.isRequired
}

/*--------------------------------------------------*/
let getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id == id)
  // first and only element from returned array 
  if (course) return course[0]
  return null 
}

/*--------------------------------------------------*/
let mapStateToProps = (state, ownProps) => {
  // from router /course/:id
  const courseId = ownProps.params.id 
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }
  const listAuthorsFormatted = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  })
  return { 
    course: course,
    authors: listAuthorsFormatted,
    loading: state.ajaxCallsInProgress > 0,
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
