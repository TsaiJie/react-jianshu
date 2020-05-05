import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { connect } from 'react-redux'
import bannerImg from '../../statics/img/banner.png'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import { actionCreators } from './store'
class Home extends React.Component {
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
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.requestHomeData()
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestHomeData() {
      dispatch(actionCreators.requestHomeDataAction())
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)
