import React from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
class Detail extends React.PureComponent {
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
    this.props.getDetail(this.props.match.params.id)
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
    getDetail(id) {
      dispatch(actionCreators.getDetailAction(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
