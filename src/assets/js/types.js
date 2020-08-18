import icon1 from '@/assets/img/tabbar/tab-icon1.png'
import icon2 from '@/assets/img/tabbar/tab-icon2.png'
import icon3 from '@/assets/img/tabbar/tab-icon3.png'
import icon4 from '@/assets/img/tabbar/tab-icon4.png'
import icon5 from '@/assets/img/tabbar/tab-icon5.png'

import icon1Active from '@/assets/img/tabbar/tab-icon1-active.png'
import icon2Active from '@/assets/img/tabbar/tab-icon2-active.png'
import icon3Active from '@/assets/img/tabbar/tab-icon3-active.png'
import icon4Active from '@/assets/img/tabbar/tab-icon4-active.png'
import icon5Active from '@/assets/img/tabbar/tab-icon5-active.png'

import { walletMenuIconMap } from '@/assets/js/imgUrlMap'

export const WALLET_MENNUS = [
  {
    name: '提现兑换',
    type: 'tx',
    img: walletMenuIconMap.tx,
    url: ''
  },
  {
    name: '收益记录',
    type: 'sy',
    img: walletMenuIconMap.sy,
    url: ''
  },
  {
    name: '推荐赚钱',
    type: 'tj',
    img: walletMenuIconMap.tj,
    url: ''
  },
  {
    name: '赚钱团队',
    type: 'zq',
    img: walletMenuIconMap.zq,
    url: ''
  }
]

export const TAB_LIST = [
  {
    id: 1,
    icon: icon1,
    iconActive: icon1Active,
    text: '比赛'
  },
  {
    id: 2,
    icon: icon2,
    iconActive: icon2Active,
    text: '数据'
  },
  {
    id: 3,
    icon: icon3,
    iconActive: icon3Active,
    text: '看点',
    large: true
  },
  {
    id: 4,
    icon: icon4,
    iconActive: icon4Active,
    text: '任务'
  },
  {
    id: 5,
    icon: icon5,
    iconActive: icon5Active,
    text: '我的'
  }
]

export const GAME_TYPES = {
  lol: {
    name: '英雄联盟',
    icon: 'lol-h5',
    color: '#009BF5'
  },
  dota: {
    name: 'DOTA2',
    icon: 'dota-h5',
    color: '#ED5758'
  },
  ow: {
    name: '守望先锋',
    icon: 'ow-h5',
    color: '#F4B544'
  },
  csgo: {
    name: 'CS:GO',
    icon: 'csgo-h5',
    color: '#0097E6'
  },
  kog: {
    name: '王者荣耀',
    icon: 'kog-h5',
    color: '#F4B544'
  }
}

// 多行文本省略号
export const ELLIPSOS = {
  display: '-webkit-box',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical'
}

export const pageSize = 10

export const LIVE_TAB_LIST = [
  { id: 1, title: '赛前分析', type: 'showProspect' },
  { id: 2, title: '全网指数' },
  { id: 3, title: '图文直播', type: 'showLive' },
  { id: 4, title: '赛后分析', type: 'showStat' },
  { id: 5, title: '赛事战报', type: 'showInfo' }
]

export const GAME_STATUS = {
  0: '未开始',
  1: '进行中',
  2: '已结束'
}

export const mainColor = {
  blue: '#5692ED',
  red: '#ED5656'
}

export const subColor = {
  blue: '#F2F7FF',
  red: '#FFF2F2'
}

export const moneyMethods = [
  {
    title: '注册下载APP赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/1/1_1.jpg',
      'https://www.shangniu.cn/h5/img/money/1/1_2.jpg',
      'https://www.shangniu.cn/h5/img/money/1/1_3.jpg',
      'https://www.shangniu.cn/h5/img/money/1/1_4.jpg'
    ]
  },
  {
    title: '做任务签到赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/2/2_1.jpg',
      'https://www.shangniu.cn/h5/img/money/2/2_2.jpg',
      'https://www.shangniu.cn/h5/img/money/2/2_3.jpg'
    ]
  },
  {
    title: '做任务看比赛赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/3/3_1.jpg',
      'https://www.shangniu.cn/h5/img/money/3/3_2.jpg',
      'https://www.shangniu.cn/h5/img/money/3/3_3.jpg'
    ]
  },
  {
    title: '做任务阅读文章赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/4/4_1.jpg',
      'https://www.shangniu.cn/h5/img/money/4/4_2.jpg',
      'https://www.shangniu.cn/h5/img/money/4/4_3.jpg'
    ]
  },
  {
    title: '做任务分享比赛赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/5/5_1.jpg',
      'https://www.shangniu.cn/h5/img/money/5/5_2.jpg',
      'https://www.shangniu.cn/h5/img/money/5/5_3.jpg'
    ]
  },
  {
    title: '做任务邀请好友赚钱流程',
    imgs: [
      'https://www.shangniu.cn/h5/img/money/6/6_1.jpg',
      'https://www.shangniu.cn/h5/img/money/6/6_2.jpg',
      'https://www.shangniu.cn/h5/img/money/6/6_3.jpg',
      'https://www.shangniu.cn/h5/img/money/6/6_4.jpg'
    ]
  }
]

export const BILL_TITLES = {
  '1': '注册',
  '2': '登录',
  '3': '观看比赛',
  '4': '阅读文章',
  '5': '分享',
  '6': '签到',
  '7': '抽奖',
  '8': '余额',
  '9': '代币兑换'
}
