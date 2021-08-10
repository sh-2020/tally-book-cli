import React from 'react'
import ReactDOM from 'react-dom'
import 'lib-flexible/flexible'
import './index.css'
import App from './App'
import { Route,BrowserRouter as Router, } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)