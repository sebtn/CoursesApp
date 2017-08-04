import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from './Header'

class ManageCourse extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
  }

/*--------------------------------------------------*/
  render() {
    return (
      <div className="manage-course-container container-fluid">
        <Header />
      </div>
    )
  }
}

/*--------------------------------------------------*/
ManageCourse.propTypes = {
  // ManageCourse: PropTypes.array.isRequired,
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  return { state: state }
}

/*--------------------------------------------------*/
let mapDispatchToProps = (dispatch) => {
  return {
    // createCourse: bindActionCreators(createCourse, dispatch)
  }
}

/*--------------------------------------------------*/
export default connect(mapStateToProps)(ManageCourse)
