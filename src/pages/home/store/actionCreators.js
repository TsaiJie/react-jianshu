import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
const _requestHomeDataAction = result => ({
  type: actionTypes.REQUEST_HOME_DATA,
  articleList: result.articleList,
  topicList: result.topicList,
  recommendList: result.recommendList,
  writterList: result.writterList
})
const _addHomeListAction = (result, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  result: fromJS(result),
  nextPage
})
export const requestHomeDataAction = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      if (res.data.success) {
        dispatch(_requestHomeDataAction(res.data.data))
      } else {
        console.log('获取数据失败')
      }
    })
  }
}

export const getMoreListAction = page => {
  return dispatch => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      if (res.data.success) {
        console.log(res.data.data)
        dispatch(_addHomeListAction(res.data.data, page + 1))
      } else {
        console.log('获取数据失败')
      }
    })
  }
}
