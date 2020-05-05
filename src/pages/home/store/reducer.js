import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: [],
  articlePage: 1
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writterList: fromJS(action.writterList)
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.result),
        articlePage: action.nextPage
      })

    default:
      return state
  }
}
