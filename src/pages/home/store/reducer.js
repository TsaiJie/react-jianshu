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
  ],
  articleList: [
    {
      id: 1,
      title: 'React+springboot权限管理系统·前后端分离',
      desc:
        '项目预览拥有全部功能，开源代码禁止全部商用，给客服开发的正式项目并没有权限系统，由于网上基本没有react的权限系统，因此我决定开发出来并且前后...',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/19961919-99447a68945e5cf3.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '《Markdown写作指南》00：概览',
      desc:
        'Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。 Markdown具有一系列......',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/8331536-55eed031dee0e291.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '我在乎钱了',
      desc:
        '我也领取了简书日更一百天的徽章，挑战日更一路走来，还真不是太简单。 吴中槐上吊自寻短见了，听到这个消息我都有点怀疑人生了，好端端的吴中槐怎会上吊......',
      imgUrl: ''
    },
    {
      id: 4,
      title: '如何像百度网盘一样在资源管理器里面生成盘符？',
      desc:
        '1、什么是虚拟盘符 在电脑上安装了百度网盘客户端后会在资源管理器的"设备和驱动器"分组中增加一个百度网盘的盘符(截图一)，该百度网盘的盘符就是虚......',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/444054-cf4897e9c2dc0568.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 5,
      title: '突如其来的考试，让我开始想要学英语',
      desc:
        '距离大学毕业，已经快三年了。从来没碰过英语相关的内容。 甚至说大学都很少接触英语，大一上，四级考试，低分飘过之后，感觉就万事大吉了。 虽然也参加......',
      imgUrl:
        'https://upload-images.jianshu.io/upload_images/21731714-25594f6b2108e06b.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 3,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 4,
      imgUrl:
        'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }
  ],
  writterList: [
    {
      id: 1,
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writer: '董克平日记',
      desc: '写了945.3k字 · 3.6k喜欢'
    },
    {
      id: 2,
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writer: '吴晓布',
      desc: '写了761.4k字 · 24.9k喜欢'
    },
    {
      id: 3,
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writer: '格列柯南',
      desc: '写了766.6k字 · 44k喜欢'
    },
    {
      id: 4,
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writer: '乔汉童',
      desc: '写了358.3k字 · 2k喜欢'
    },
    {
      id: 5,
      imgUrl:
        'https://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      writer: '王老师八卦美术史',
      desc: '写了106.5k字 · 1.4k喜欢'
    }
  ]
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
