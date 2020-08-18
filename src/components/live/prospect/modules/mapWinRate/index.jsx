import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import style from './Style.module.scss'

const MapRateCircle = ({ data, teamA, teamB }) => {
  if (!data || !data.length) return
  // 计算胜率
  function calcRate(win, lose, draw) {
    const all = win + lose + draw
    if (all === 0) {
      return '0%'
    }
    const rate = ((win / all) * 100).toFixed(0)
    return rate + '%'
  }
  return (
    <View className={style.box}>
      {data.map((item) => {
        return (
          <View key={item.map_name} className={style.item}>
            <View className={style.mapImg}>
              <Image
                className={style.img}
                src={`https://www.shangniu.cn/img/csgo/${item.map_name}.png`}
              />
            </View>
            <Text className={style.name}>{item.map_name}</Text>
            <View className={style.teams}>
              <View className={style.team}>
                <Text className={style.teamName}>{teamA.name}</Text>
                <Text className={style.winRate}>
                  {item.team_a_win}/{item.team_a_lost}/{item.team_a_draw}/
                  {calcRate(
                    item.team_a_win,
                    item.team_a_lost,
                    item.team_a_draw
                  )}
                </Text>
              </View>
              <View className={style.team}>
                <Text className={style.teamName}>{teamB.name}</Text>
                <Text className={style.winRate}>
                  {item.team_b_win}/{item.team_b_lost}/{item.team_b_draw}/
                  {calcRate(
                    item.team_b_win,
                    item.team_b_lost,
                    item.team_b_draw
                  )}
                </Text>
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default MapRateCircle
