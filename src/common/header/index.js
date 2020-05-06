import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
// 引入动画
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      hancleChangePage
    } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => hancleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={icon => {
                  this.spinIcon = icon
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      logout
    } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe6e5;</span>
              写文章
            </Button>
          </Link>

          <Button className="reg">注册</Button>
        </Addition>
        <Nav>
          <Link to="/">
            <NavItem className="left">首页</NavItem>
          </Link>

          <NavItem className="left">下载APP</NavItem>
          {login ? (
            <NavItem className="right" onClick={logout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}

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
                onFocus={() => {
                  handleInputFocus(list)
                }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    // focused: state.get('header').get('focused')
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList())

      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    hancleChangePage(page, totalPage, spinIcon) {
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
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
