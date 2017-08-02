import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Header from './Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <h1>This is Home, hooked on js + router</h1>
          <p>React, Redux and ES6 in responsive webApp </p>
          <Link 
            to='/About' 
            className="btn btn-primary btn-lg">
            Learn More 
          </Link>
        </div>
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Home)