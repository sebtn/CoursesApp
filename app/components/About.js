import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from './Header'

class About extends Component {
  render() {
    return (
      <div className="about-container container-fluid">
        <Header loading={this.props.loading}/>
        <h1>This is About, about to be but, Canadian eh!</h1>
        <p>React, Redux as tooling for cool apps</p>
        <p>Other libraries</p>
      </div>
    )
  }
}

/*--------------------------------------------------*/
let mapStateToProps = (state) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
  }
}
/*--------------------------------------------------*/
export default connect(mapStateToProps)(About)