import React from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
class Detail extends React.Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetail() {
      dispatch(actionCreators.getDetailAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
