import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import About from './About'
import Home from './Home'
import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <h1>This is main, hooked on js</h1>
        {this.props.children}
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Main)
