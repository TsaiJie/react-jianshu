import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends React.PureComponent {
  render() {
    const { loginState } = this.props
    console.log(loginState)
    if (loginState) {
      return <div>写文章</div>
    } else {
      return <Redirect to="/login"></Redirect>
    }
  }
  componentDidMount() {}
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Write)
