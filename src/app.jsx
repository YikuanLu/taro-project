import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      'pages/index/index', //首页
      'pages/login/index', //登录
      'pages/loginForget/index', // 忘记密码
      'pages/logup/index', // 注册
      'pages/guide/index', //引导页
      'pages/userCenter/index', // 我的主页
      'pages/userAttention/index', // 我的关注
      'pages/userArticle/index', // 我的作品
      'pages/userComment/index', // 我的评论
      'pages/userScan/index', // 我的浏览
      'pages/userWallet/index', // 我的钱包
      'pages/live/index', // 比赛详情
      'pages/appDownload/index', // 下载app
      'pages/agreement/index', // 注册协议
      'pages/activity/incomeShare/index', // 收益分享
      'pages/activity/regSuccess/index', // 分享注册成功
      'pages/moneyMethod/index', //赚钱攻略
      'pages/activity/task/index' // 新手注册任务
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
