import React from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends React.Component {
  render() {
    const { list } = this.props
    return (
      <React.Fragment>
        {list.map(item => {
          return (
            <ListItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt=""></img>
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
