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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'
class Header extends React.Component {
  getListArea() {
    const { focused, list } = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map(item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
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
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont' : 'iconfont'}>
              &#xe687;
            </span>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
    // focused: state.get('header').get('focused')
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
