import * as actionTypes from './actionTypes'
import axios from 'axios'
const _requestHomeDataAction = result => ({
  type: actionTypes.REQUEST_HOME_DATA,
  articleList: result.articleList,
  topicList: result.topicList,
  recommendList: result.recommendList,
  writterList: result.writterList
})
export const requestHomeDataAction = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      if (res.success) {
        dispatch(_requestHomeDataAction(res.data.data))
      } else {
        console.log('获取数据失败')
      }
    })
  }
}
