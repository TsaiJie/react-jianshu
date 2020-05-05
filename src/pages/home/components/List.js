import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
class List extends React.Component {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <React.Fragment>
        {list.map((item, index) => {
          return (
            <ListItem key={index}>
              <img className="pic" src={item.get('imgUrl')} alt=""></img>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
        <LoadMore onClick={getMoreList.bind(this, page)}>更多文字</LoadMore>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getMoreList(page) {
      console.log(page)
      dispatch(actionCreators.getMoreListAction(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
