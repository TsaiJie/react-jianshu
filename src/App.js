import React from 'react'
import Header from './common/header'
import store from './store'
// 引入react-redux
import { Provider } from 'react-redux'
// 引入路由
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <Header></Header>
          {/* 路径完全相等的时候才匹配 exact */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/write" exact component={Write}></Route>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  )
}

export default App
