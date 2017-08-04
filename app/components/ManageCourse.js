import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from './Header'
import CourseForm from './CourseForm'

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
  render() {
    return (
      <div className="manage-course-container container-fluid">
        <Header />
        <CourseForm 
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}/>
      </div>
    )
  }
}

/*--------------------------------------------------*/
ManageCourse.propTypes = {
  course: PropTypes.object.isRequired,
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  let course = {
    id: '', watchHref: '', title: '', authorId: '', length: '', category: ''
  }
  return { course: course }
}

/*--------------------------------------------------*/
let mapDispatchToProps = (dispatch) => {
  return {
    // createCourse: bindActionCreators(createCourse, dispatch)
  }
}

/*--------------------------------------------------*/
export default connect(mapStateToProps)(ManageCourse)
