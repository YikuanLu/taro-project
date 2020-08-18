import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import RecentGame from '@/components/live/prospect/modules/recentGame'

import style from './Style.module.scss'

const CsgoProspect = ({ data }) => {
  if (!data) return
  const { team_a_matches: teamA, team_b_matches: teamB } = data
  return (
    <View className={style.box}>
      <View className={style.title}>近期战绩(最近5场表现)</View>
      <View className={style.gameList}>
        <RecentGame data={teamA} />
        <RecentGame data={teamB} role="red" />
      </View>
    </View>
  )
}

export default CsgoProspect
