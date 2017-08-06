import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import LoadingLogo from './LoadingLogo' 

const Header = ({loading}) => {
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
      { loading &&  <LoadingLogo interval={50} dots={30} /> }
    </div>
  )
}

/*--------------------------------------------------*/
Header.propTypes = {
  loading: PropTypes.bool.isRequired
}

/*--------------------------------------------------*/
export default Header