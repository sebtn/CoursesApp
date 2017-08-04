import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Link 
          to='/About' 
          className="btn btn-link btn-lg">
          about
        </Link>    
        {`|`}    
        <Link 
          to='/Home' 
          className="btn btn-link btn-lg">
          home
        </Link>
        {`|`}    
        <Link 
          to='/Courses' 
          className="btn btn-link btn-lg">
          courses
        </Link>       
        {`|`}    
        <Link 
          to='/Course' 
          className="btn btn-link btn-lg">
          course
        </Link>
      </div>
    )
  }
}

/*--------------------------------------------------*/
export default connect()(Header)