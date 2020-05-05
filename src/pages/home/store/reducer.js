import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: [],
  articlePage: 1,
  showScroll: false
})

const requestHomeData = (state, action) =>
  state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writterList: fromJS(action.writterList)
  })

const addHomeList = (state, action) =>
  state.merge({
    articleList: state.get('articleList').concat(action.result),
    articlePage: action.nextPage
  })
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_HOME_DATA:
      return requestHomeData(state, action)
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action)
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.isShow)

    default:
      return state
  }
}
