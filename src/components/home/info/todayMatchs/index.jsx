import Taro, { useEffect, useState, useContext } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import classNames from 'classnames'

import MyContext from '@/utils/context'
import { setTab } from '@/assets/js/publicFn'
import IconFont from '@/icon'
import { GAME_TYPES } from '@/assets/js/types'
import MatchItem from '@/components/home/info/todayMatchs/matchItem'
import { todayMatchList } from '@/api/battle'
import style from './Style.module.scss'

const TodayMatchs = () => {
  const initGameTypes = Object.keys(GAME_TYPES) // 所有的游戏类型
  const gameTypes = Taro.getStorageSync('gameTypes') || initGameTypes // 已选择的游戏类型
  const [matchData, setMatchData] = useState(null)

  const context = useContext(MyContext) || {}
  const { dispatch } = context

  useEffect(() => {
    todayMatchList({ gameTypes: gameTypes.join(',') }).then((res) => {
      setMatchData(res)
    })
  }, [])

  if (!matchData) return
  return (
    <View className={style.box}>
      <View className={style.matchNum} onClick={() => setTab(dispatch, 1)}>
        <View className={style.left}>
          <IconFont name="laba" color="#C4CCD7" size={30} />
          <Text className={style.text}>
            今日共有{matchData.length || '-'}场比赛
          </Text>
        </View>
        <IconFont name="jinru" color="#C3CBD6" size={30} />
      </View>
      <View className={style.matchList}>
        {matchData.map((item) => {
          return <MatchItem key={item.matchId} data={item} />
        })}
      </View>
    </View>
  )
}

export default TodayMatchs
