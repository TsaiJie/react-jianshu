import axios from 'axios'
import * as actionTypes from './actionTypes'
const _login = () => ({
  type: actionTypes.LOGIN,
  value: true
})

export const loginAction = (account, password) => {
  return dispatch => {
    axios
      .get('api/login.json?account=' + account + '&password=' + password)
      .then(res => {
        const result = res.data.data
        if (result) {
          dispatch(_login())
        } else {
          alert('登录失败')
        }
      })
  }
}
export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})
