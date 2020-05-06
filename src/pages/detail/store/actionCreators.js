import axios from 'axios'
import * as actionTypes from './actionTypes'
const chageDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content
})
export const getDetailAction = () => {
  return dispatch => {
    axios.get('/api/detail.json').then(res => {
      const result = res.data.data
      dispatch(chageDetail(result.title, result.content))
    })
  }
}
