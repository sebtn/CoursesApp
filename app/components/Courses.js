import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from './Header'

class Courses extends Component {
/*--------------------------------------------------*/
  constructor(props, context) {
    super(props, context)
    this.state ={
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
    alert(`saving ${this.state.course.title}`)
  }

/*--------------------------------------------------*/
  render() {
    return (
      <div>
        <Header />
        <h1>This is courses</h1>
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
// export default connect()(Main)
export default (Courses)
