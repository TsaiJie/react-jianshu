# 简书项目

### 0 项目使用的插件

```node
yarn add styled-components 负责局部css样式
yarn add react-transition-group 负责动画
yarn add redux react-redux 负责数据管理
yarn add immutable redux-immutable 负责State数据的不可变性，防止恶意更改
yarn add redux-thunk axios 负责扩展action的功能，既可以返回对象，也可以返回函数。 
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

####  2.5 使用redux对数据进行统一管理

redux的使用

```js
//  src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware()
  // other store enhancers if any
)
const store = createStore(reducer, enhancer)

export default store


```

```js
// src/store/reducer.js
const defaultState = {
	focused:false
}
export default (state = defaultState, action) => {
  if (action.type === 'search_focus'){
    return {
  		focused: true    
    }
  }
  if (action.type === 'search_blur'){
    return {
  		focused: false    
    }
  }
}
```

react-redux的使用

```js
// src/App.js
import React from 'react'
import Header from './common/header'
import store from './store'
// 引入react-redux
import { Provider } from 'react-redux'
function App() {
  return (
    //Provider组件 里面的组件 都可以访问store了
    <Provider store={store}>
      <Header></Header>
    </Provider>
  )
}

export default App
```
在组件中使用
```js
// src/common/header/index.js
// connect进行连接 Provider进行提供
import { connect } from 'react-redux'

Header组件

// 对state数据映射到props 组件使用的时候 要这样使用this.props.xxx
const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.focus
  }
}
// 对dispatch映射到props 组件使用的时候 要这样使用this.props.xxx 并且不用进行bind绑定了，
// 只有传参的时候才需要绑定bind，或者套一个箭头函数， 
// 例如 onClick = {this.props.handleClick.bind(this, params)} 
// 或者 onClick = {() =>  this.props.handleClick(params)} 

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
```

#### 2.6 对组件的数据进行拆分管理

1. 在header目录下创建如下目录

   ```
   header
   	store
   		index.js 负责统一导出store中的内容
   		reducer.js 负责处理action
   		actionTypes.js 负责统一管理action的type 进行导出
   		actionCreators.js 负责统一生成action
   ```
   
   ```js
   // src/common/header/store/index.js
   // 负责统一导出小组件store中的内容 
   import reducer from './reducer'
   import * as actionCreators from './actionCreator'
   import * as actionTypes from './actionTypes'
   export { reducer, actionCreators, actionTypes }
   
   ```
   
   
   
2. 对src目录下的store中的reducer进行改写

   ```js
   import { combineReducers } from 'redux'
   import { reducer as headerReducer } from '../common/header/store'
   // combineReducers对每个组件中的reducer进行整合，生成一个大的reducer
   export default combineReducers({
     header: headerReducer
   })
   
   ```

3. 组件中这样对数据进行映射

   ```js
   const mapStateToProps = (state, ownProps) => {
     return {
       focused: state.header.focused
     }
   }
   ```
#### 2.7 使用immutable和redux-immutable来管理store中的数据

```
yarn add immutable redux-immutable
```



Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变。

Immutable 基本使用

```js
// src/common/header/store/reducer.js
import { fromJS } from 'immutable'
// 把state变为immutable对象 同时会把数组也变为immutable对象，
// 不能直接用set更改 需要对list转换为immutable,也就是对list 进行此操作fromJS(list)
// 
const defaultState = fromJS({
  focused: false,
})

// 设置多个值的写法
/*
state.set('list', action.data).set('totalPage', action.totalPage)
state.merge({
        list: action.data,
        totalPage: action.totalPage
      })

*/
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    default:
      return state
  }
}
```

```js
// 组件中使用
//  src/common/header/index.js
const mapStateToProps = (state, ownProps) => {
  return {
    //这里使用的是immutable的方法
   // focused: state.header.get('focused')
    //这里使用的时redux-immutable的方法
    // 要清楚这里的state的值是在哪里创建的 是在 src/store/reducer.js里面创建的
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
  }
}
```

redux-immutable的使用

```js
// src/store/reducer.js

//之前的代码
//import { combineReducers } from 'redux'
// 引入了redux-immutable之后的代码
import { combineReducers } from 'redux-immutable'
//combineReducers 生成的reducer就是immutable的数据内容
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  header: headerReducer
})
```

#### 2.8 ajax获取数据(redux-thunk axios)

public目录下的文件可以访问到，可以把模拟数据放在里面，然后进行网络请求

```js
yarn add redux-thunk
yarn add axios
```

中间件thunk的使用,可以保证我们在action中写函数

```js
// src/store/index.js
import thunk from 'redux-thunk'
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
)
```

```js
//  src/common/header/index.js
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      //点击聚焦的时候派发一个action 获取数据
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    }
  }
}
```

```js
// src/common/header/store/actionCreator.js
const changeList = data => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),//把list变为immutable类型，保证和state的类型一致
})
// 使用了thunk就可以返回一个函数
export const getList = () => {
  return dispatch => {
    axios
      .get('/api/headerList.json')
      .then(res => {
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch(() => {
        console.log('error')
      })
  }
}
```

#### 2.9 分页功能实现

```js
// src/common/header/store/actionCreator.js
const changeList = data => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  //总页数
  totalPage: Math.ceil(data.length / 10)
})
```



```js
// src/common/header/store/reducer.js
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    default:
      return state
  }
}
```

```js
getListArea() {
   //分页的核心代码
  /*
  	1.获取全部列表的数据
  	2. 根据page的值，对列表数据进行遍历，每次导出十条数据
  	3. 当发生点击下一页事件的时候，page会发生改变，react会重新渲染
  	4. 此时page发生改变，在进行for循环的时候获取的时下一个10条数据
  	0-9条数据
  	page 1 
  	i 0
  	i < 10
  	newList[i]
  	
  	
  	10-19条数据
  	page 2
  	i 10
  	i < 20
  	newList[i]
  */
  // 把immutable类型的list转化为普通的list
    const newList = list.toJS()
    const pageList = []
 		// 判断是否为空，为空的话就不执行
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
 }
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hancleChangePage(page, totalPage, spinIcon) {
      // 控制图表的旋转
      /*
      	1.用ref绑定图标的dom元素
      	2.点击下一页的时候把dom元素传入改变页码的函数
      	3. 通过元素获取transform属性的值
      	4. 在原有值的基础上进行步进，每次增加360°
      */
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/gi, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
			
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
      // console.log(page, totalPage)
    }
  }
}
 
 
```

### 3 其他页面

#### react路由

```js
// 引入路由
import { BrowserRouter, Route } from 'react-router-dom'
// BrowserRouter 用来包裹需要跳转的组件
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <BrowserRouter>
          <Header></Header>
          {/* 路径完全相等的时候才匹配 exact */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  )
}
//路由跳转
<Link key={index} to={'/detail/'}> 组件</Link>
```



#### 动态路由以及路由传参

动态路由

```
1 列表页 <Link key={index} to={'/detail/' + item.get('id')}>
2 路由页面 更改为动态路由 <Route path="/detail/:id" exact component={Detail}></Route>
3 详情页 通过this.props.match.params.id来获取 
```
路由传参
```
1 列表页 <Link key={index} to={'/detail?id=' + item.get('id')}>
2 路由页面 路由规则保持不变<Route path="/detail" exact component={Detail}></Route>
3 详情页 通过this.props.location.search来获取 但是获取到的是 ?id=2 需要手动解析
```

