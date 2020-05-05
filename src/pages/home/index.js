import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import { connect } from 'react-redux'
import bannerImg from '../../statics/img/banner.png'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import List from './components/List'
import axios from 'axios'
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
    axios.get('/api/home.json').then(res => {
      const result = res.data.data
      console.log(result)
      const action = {
        type: 'request_home_data',
        articleList: result.articleList,
        topicList: result.topicList,
        recommendList: result.recommendList,
        writterList: result.writterList
      }
      this.props.requestHomeData(action)
    })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestHomeData(action) {
      dispatch(action)
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)
