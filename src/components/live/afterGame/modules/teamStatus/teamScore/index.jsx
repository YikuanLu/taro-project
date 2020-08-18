import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { durationFormat } from '@/assets/js/publicFn'
import style from './Style.module.scss'

const TeamScore = ({ data = {} }) => {
  if (!data.blue || !data.red) return
  const { blue, red, duration } = data
  return (
    <View className={style.box}>
      <View className={style.scores}>
        <Text className={style.num}>{blue.kill_count}</Text>
        <Text className={style.vs}>VS</Text>
        <Text className={style.num}>{red.kill_count}</Text>
      </View>
      <View className={style.time}>{durationFormat(duration * 1000)}</View>
    </View>
  )
}

export default TeamScore
