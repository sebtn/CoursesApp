import React from 'react'
import { Route, 
  Router, 
  IndexRoute,
  hashHistory } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'
import Courses from '../components/Courses'
import ManageCourse from '../components/ManageCourse'

export default(
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main} />
      <Route path='/Home' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Courses' component={Courses}/>
      <Route path='/Course' component={ManageCourse}/>
    </Route>
  </Router>
)