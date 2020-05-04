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
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>简书</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>微信小程序</SearchInfoItem>
            <SearchInfoItem>EOS</SearchInfoItem>
            <SearchInfoItem>docker</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
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
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={this.props.focused ? 'focused iconfont' : 'iconfont'}
            >
              &#xe687;
            </span>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
      </HeaderWrapper>
    )
  }
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
