import React from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends React.Component {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map(item => {
          return (
            <TopicItem key={item.get('id')}>
              <img className="topic-pic" src={item.get('imgUrl')} alt=""></img>
              {item.get('title')}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)
