import { fromJS } from 'immutable'
import itemImg from '../../../statics/img/item.png'
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: itemImg
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: itemImg
    }
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
