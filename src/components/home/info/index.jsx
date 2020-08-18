import Taro, { useState } from '@tarojs/taro'
import { View, Block } from '@tarojs/components'

import TopBar from '@/components/common/topBar'
import Banner from '@/components/common/banner'
import GameTypes from '@/components/common/gameTypes'
import InfoTypes from '@/components/home/info/infoTypes'
import TodayMatchs from '@/components/home/info/todayMatchs'
import style from './Style.module.scss'

const Info = () => {
  const [showFollow, setShowFollow] = useState(false) // 是否显示关注列表

  // 切换游戏
  const switchGame = (val) => {
    console.log(val)
    // 关注的
    if (val === 'follow') {
      setShowFollow(true)
      return
    }
    setShowFollow(false)
  }

  // 切换类型
  const switchType = (val) => {
    console.log(val)
  }

  return (
    <View className={style.infoContainer}>
      <TopBar title="看点" />
      <Banner posId="202" />
      <Block>
        <GameTypes onClick={switchGame} />
        {!showFollow && <InfoTypes onClick={switchType} />}
      </Block>
      <TodayMatchs />
    </View>
  )
}

export default Info
