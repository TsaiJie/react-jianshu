import React from 'react'
import Header from './common/header'
import store from './store'
// 引入react-redux
import { Provider } from 'react-redux'
// 引入路由
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header></Header>
        <BrowserRouter>
          {/* 路径完全相等的时候才匹配 exact */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  )
}

export default App
