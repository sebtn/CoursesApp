import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div>
        <h1>This is main, hooked on js</h1>
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Main)
