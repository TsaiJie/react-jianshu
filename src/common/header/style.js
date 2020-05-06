import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 940px;
`
export const Logo = styled.div`
  height: 56px;
  float: left;
  display: block;
  width: 100px;
  height: 56px;
  margin-right: 20px;
  /* 要使用变量的方式引入图片 */
  background: url(${logoPic});
  /* 缩放背景图片以完全装入背景区，可能背景区部分空白 */
  background-size: contain;
`
export const Nav = styled.div`
  width: 100%;
  min-width: 400px;
  box-sizing: border-box;
  height: 100%;
  padding-right: 270px;
  padding-left: 145px;
`
// 如果当前是一个NavItem组件,同时NavItem有left class 同时NavItem有right class
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    /* background: #969696; */
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  /* 输入东西过多时 要有间隔 */
  padding: 0 35px 0 20px;
  border: none;
  outline: none;
  /* 为高度的一半 就可以变为圆角 */
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  ::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 200px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`
export const SearchInfoTitle = styled.h3`
  margin-top: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div``
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export const Addition = styled.div`
  float: right;
  height: 56px;
  width: 215px;
  /* background-color: green; */
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #ffff;
    background: #ec6149;
    .iconfont {
      margin-right: 5px;
    }
  }
`
