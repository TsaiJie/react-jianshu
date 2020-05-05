import React from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends React.Component {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {list.map(item => {
          return (
            <RecommendItem
              key={item.get('id')}
              imgUrl={item.get('imgUrl')}
            ></RecommendItem>
          )
        })}
      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
