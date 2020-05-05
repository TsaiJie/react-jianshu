import React from 'react'
import { WriterWrapper, WriterItem } from '../style'
import { connect } from 'react-redux'
class Writter extends React.PureComponent {
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        {list.map(item => {
          return (
            <WriterItem key={item.get('id')}>
              <img className="pic" src={item.get('imgUrl')} alt=""></img>
              <div className="info">
                <p className="writer">{item.get('writter')}</p>
                <p className="desc"> {item.get('desc')}</p>
                <p>
                  <button className="guanzhu">+ 关注</button>
                </p>
              </div>
            </WriterItem>
          )
        })}
      </WriterWrapper>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    list: state.getIn(['home', 'writterList'])
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Writter)
