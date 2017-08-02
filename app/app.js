import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import  '././styles/app.scss' 
import Main from './components/Main'


ReactDOM.render(<Main />, document.getElementById('root'))