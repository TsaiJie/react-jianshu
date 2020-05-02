# 简书项目
## 1 项目初始化
1.安装styled-components对css进行模块儿管理

```
yarn add styled-components
```
2.对样式进行全局初始化`createGlobalStyle`

***styled-components废弃全局属性injectGlobal更改为createGlobalStyle***

```js
// style.js 引入reset.css
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
	background: green
}
`

// App.js
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

```

