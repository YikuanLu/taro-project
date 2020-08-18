import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import MapWinRate from '@/components/live/prospect/modules/mapWinRate'

import style from './Style.module.scss'

const CsgoProspect = ({ data }) => {
  if (!data) return
  const { map_stats: mapData, team_a: teamA, team_b: teamB } = data
  return (
    <View className={style.box}>
      <View className={style.title}>近期战队对战地图胜率</View>
      <MapWinRate data={mapData} teamA={teamA} teamB={teamB} />
    </View>
  )
}

export default CsgoProspect
