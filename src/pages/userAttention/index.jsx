import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import NavBar from '@/components/common/navBar'
import MyTabs from '@/components/common/myTabs'
import ContentList from '@/components/userAttention/contentList'

import style from './UserAttention.module.scss'

const tabsList = [
  {
    name: '关注赛事',
    key: 'match'
  },
  {
    name: '关注资讯',
    key: 'news'
  }
]

const UserAttention = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const changeIndex = (val) => {
    setCurrentIndex(val)
  }
  return (
    <View className={style.userAttention}>
      <NavBar title="我的关注" />
      <MyTabs
        tabsList={tabsList}
        currentIndex={currentIndex}
        onChange={changeIndex}
      />
      <ContentList currentIndex={currentIndex} />
    </View>
  )
}

export default UserAttention
