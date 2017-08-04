import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import About from './About'
import Home from './Home'
import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div className="main-container container-fluid">
        <Header />
        <h1>This is main, hooked on js</h1>
        <h4>This is a little welcome message</h4>
        {this.props.children}
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Main)
