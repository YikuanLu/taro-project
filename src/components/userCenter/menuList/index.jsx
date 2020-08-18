import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import { userMenuIcon } from '@/assets/js/imgUrlMap'

import style from './MenuList.module.scss'

const MENU_LIST = [
  {
    name: '我的关注',
    icon: userMenuIcon.gz,
    path: '/pages/userAttention/index',
    type: 'attention'
  },
  {
    name: '我的作品',
    icon: userMenuIcon.zp,
    path: '/pages/userArticle/index',
    type: 'works'
  },
  {
    name: '我的评论',
    icon: userMenuIcon.pl,
    path: '/pages/userComment/index',
    type: 'comment'
  },
  {
    name: '我的浏览',
    icon: userMenuIcon.ll,
    path: '/pages/userScan/index',
    type: 'scan'
  }
]

const MenuList = () => {
  return (
    <View className={style.menuList}>
      {MENU_LIST.map((item) => (
        <View
          key={item.type}
          className={style.menuItem}
          onClick={() => {
            Taro.navigateTo({ url: item.path })
          }}
        >
          <View className={style.icon}>
            <Image className={style.img} src={item.icon} />
          </View>
          <View className={style.text}>{item.name}</View>
        </View>
      ))}
    </View>
  )
}

export default MenuList
