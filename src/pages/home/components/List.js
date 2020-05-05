import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
// PureComponent要和immutable结合使用才最优
// 只要store发生改变 每一个组件都会重新渲染 影响性能
// shouldComponentUpdate() {} 判断只有和本组件相关的数据发生改变才进行重新渲染
// PureComponent 底层实现了shouldComponentUpdate(){}
class List extends React.PureComponent {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <React.Fragment>
        {list.map((item, index) => {
          return (
            <Link key={index} to="/detail">
              <ListItem>
                <img className="pic" src={item.get('imgUrl')} alt=""></img>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
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
