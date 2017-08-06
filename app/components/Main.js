import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from './Header'

class Main extends Component {
  render() {
    return (
      <div className="main-container container-fluid">
        <Header 
          loading={this.props.loading} 
        />
        <h1>This is main, hooked on js</h1>
        <h4>This is a little welcome message</h4>
        {this.props.children}
      </div>
    )
  }
}
/*--------------------------------------------------*/
Main.propTypes = {
  loading: PropTypes.bool.isRequired
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
  }
}

/*--------------------------------------------------*/
export default connect(mapStateToProps)(Main)
