# 简书项目

### 0 项目使用的插件

```node
yarn add styled-components
yarn add react-transition-group
```



### 1 项目初始化

#### 1.安装styled-components对css进行模块儿管理

```
yarn add styled-components
```
#### 2.对样式进行全局初始化`createGlobalStyle`

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

### 2 Common头部

#### 2.1 styled的基本使用

```js
// 创建了一个名字叫SearchWrapper的a标签组件
// 对于更复杂的选择器,可以使用与号(&)来指向主组件.
//如果只写选择器而不带&,则指向组件的子节点.
export const SearchWrapper = styled.a.arrts({
  // 属性
  href:'/'
})`
/* 样式 */
color: #ccc;
&:hover {
    color: red; // <Thing> when hovered
  }
.something {
    color: #fff;
  }
`
```



#### 2.2 logo部分注意

```js
import logoPic from '../../statics/logo.png'
// 注意
/* 要使用变量的方式引入图片 */
background: url(${logoPic});
/* 缩放背景图片以完全装入背景区，可能背景区部分空白 */
background-size: contain;
```

#### 2.3 iconfont的导入

在statics中创建iconfont的文件夹，把下载的字体文件（.eot .css .ttf .svg .ttf）导入iconfont文件夹

修改.css中的url路径（./***）把css文件改为js文件，在入口文件作为全局样式导入，需要使用styled-components



#### 2.4 输入框的动画实现

```
实现思路是 
1. 首先定义一个控制数据 focused 开始的状态为false
2. 在input class上添加一个类，这个类的显示与否与控制数据相关，定义focus和blur的函数去改变focused的状态
3. 当focused的状态为true时 长度增加
4. 当focused的状态为falsed时，长度恢复原样
5. 然后使用react-transition-group插件设置动画
```

```js
this.state = {
      focused: false
    } 
<CSSTransition
 in={this.state.focused}
 timeout={200}
 classNames="slide">
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              ></NavSearch>
</CSSTransition>
<span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>
 &#xe687;
 </span>
```

