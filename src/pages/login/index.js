import React from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store/'
import { Redirect } from 'react-router-dom'
class Login extends React.PureComponent {
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input
              }}
            />
            <Button
              // 不知道为什么只能用剪头函数传参，bind不起作用
              onClick={() => {
                this.props.login(this.account.value, this.password.value)
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/"></Redirect>
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
  return {
    login(accountElem, passwordElem) {
      dispatch(actionCreators.loginAction(accountElem, passwordElem))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
