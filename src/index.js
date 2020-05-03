import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { GlobalStyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
const Apps = (
  <React.Fragment>
    <GlobalStyle /> <GlobalFontStyle /> <App />
  </React.Fragment>
)
ReactDOM.render(Apps, document.getElementById('root'))
