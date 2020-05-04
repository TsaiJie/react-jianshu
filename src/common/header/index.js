import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
// 引入动画
import { CSSTransition } from 'react-transition-group'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'
const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe6e5;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
      <Nav>
        <NavItem className="left">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearchWrapper>
          {/* 加入动画 */}
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont' : 'iconfont'}>
            &#xe687;
          </span>
        </SearchWrapper>
      </Nav>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.getIn(['header', 'focused'])
    // focused: state.get('header').get('focused')
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
