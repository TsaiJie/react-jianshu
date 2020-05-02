import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './style'
const Apps = (
  <React.Fragment>
    <GlobalStyle /> <App />
  </React.Fragment>
)
ReactDOM.render(Apps, document.getElementById('root'))
