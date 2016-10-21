import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import AddChatRoom from './components/AddChatRoom'
import AllChatrooms from './components/AllChatrooms'

render(
  <div className='container text-center'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>
      <Route path = '/chatrooms' component = { AllChatrooms }/>
      <Route path = '/chatrooms/new' component = { AddChatRoom }/>
    </Router>
  </div>,
  document.getElementById('root')
)