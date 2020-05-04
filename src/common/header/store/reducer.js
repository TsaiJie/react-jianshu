import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
// 把state变为immutable对象 同时会把数组也变为immutable对象，不能直接用set更改 需要对list转换为immutable
const defaultState = fromJS({
  focused: false,
  list: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值
      // 和设置的值，返回一个全新的对象
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data)
    default:
      return state
  }
}
