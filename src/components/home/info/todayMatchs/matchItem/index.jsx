import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { GAME_TYPES } from '@/assets/js/types'
import { formatTime } from '@/assets/js/publicFn'
import IconFont from '@/icon'
import TeamInfo from '@/components/home/info/todayMatchs/teamInfo'
import style from './Style.module.scss'

const InfoMatchItem = ({ data = {} }) => {
  const teamA = {
    id: data.teamAId,
    name: data.teamAShortName,
    logo: data.teamALogo
  }
  const teamB = {
    id: data.teamBId,
    name: data.teamBShortName,
    logo: data.teamBLogo
  }
  // 比赛详情
  const toMatch = () => {
    const query = `?matchId=${data.matchId}&gameType=${data.gameType}`
    Taro.navigateTo({ url: `/pages/live/index${query}` })
  }
  return (
    <View className={style.box} onClick={toMatch}>
      <View className={style.row1}>
        <Text className={style.text}>
          {data.status === 0 ? (
            formatTime(data.matchTime, 'hh:mm')
          ) : data.status === 1 ? (
            <Text style={{ color: '#3F8FFD' }}>直播中</Text>
          ) : (
            <Text style={{ color: '#9EA7B4' }}>已结束</Text>
          )}
        </Text>
        <IconFont
          name={GAME_TYPES[data.gameType].icon}
          color={[
            GAME_TYPES[data.gameType].color,
            GAME_TYPES[data.gameType].color
          ]}
          size={26}
        />
        <Text className={style.text}>BO{data.bo}</Text>
      </View>
      <View className={style.row2}>
        <TeamInfo data={teamA} />
        <Text className={style.vs}>VS</Text>
        <TeamInfo data={teamB} />
      </View>
    </View>
  )
}

export default InfoMatchItem
