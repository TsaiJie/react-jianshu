import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  .bannerImg {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  background: #f7f7f7;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    /* 图片和文字垂直居中 */
    vertical-align: middle;
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
  /* border: 1px solid #dcdcdc; */
  border-radius: 3px;
`
export const WriterItem = styled.div`
  margin-top: 15px;
  height: 47px;
  .pic {
    width: 47px;
    height: 47px;
    float: left;
    border-radius: 23px;
    vertical-align: center;
    margin-right: 10px;
    margin-left: 2px;
  }
  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 47px;
    .writer {
      font-size: 14px;
    }
    .desc {
      font-size: 12px;
      color: #969696;
    }
    .guanzhu {
      cursor: pointer;
      text-decoration: none;
      top: 10px;
      right: 0;
      position: absolute;
      color: #42c02e;
      font-size: 13px;
    }
  }
`
