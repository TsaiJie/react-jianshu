import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './style'

import App from './App'
const Apps = (
  <React.Fragment>
    <GlobalStyle /> <App />
  </React.Fragment>
)
ReactDOM.render(Apps, document.getElementById('root'))
