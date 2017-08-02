import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import About from './About'
import Home from './Home'

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>This is main, hooked on js</h1>
        <About />
        <Home />
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Main)
