import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'request_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writterList: fromJS(action.writterList)
      })
    default:
      return state
  }
}
