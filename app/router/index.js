import React from 'react'
import { Route, 
  Router, 
  IndexRoute,
  hashHistory } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import About from '../components/About'

export default(
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main} />
      <Route path='/Home' component={Home}/>
      <Route path='/About' component={About}/>
    </Route>
  </Router>
)