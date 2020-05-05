import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import { connect } from 'react-redux'
import bannerImg from '../../statics/img/banner.png'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import { actionCreators } from './store'
class Home extends React.PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="bannerImg" src={bannerImg} alt=""></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writter></Writter>
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
        ) : null}
      </HomeWrapper>
    )
  }
  // 组件挂载时 绑定事件
  componentDidMount() {
    this.props.requestHomeData()
    this.bindEvents()
  }
  // 组件销毁时 事件解绑
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  // 监听浏览器的滚动
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestHomeData() {
      dispatch(actionCreators.requestHomeDataAction())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
