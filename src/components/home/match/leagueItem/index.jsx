import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import IconFont from '@/icon'
import MatchItem from '@/components/home/match/matchItem'
import { formatTime } from '@/assets/js/publicFn'
import { GAME_TYPES } from '@/assets/js/types'
import style from './Style.module.scss'

const LeagueItem = ({ data }) => {
  if (!data) return null
  // 处理日期
  const dealDate = (date) => {
    const now = new Date(date)
    const isToday = formatTime(new Date(), 'YYYY-MM-DD') === date ? '今天' : ''
    const showDate = formatTime(now, 'MM月DD日')
    const week = formatTime(now, 'dddd')
    return `${isToday} ${showDate} ${week}`
  }

  return (
    <View className={style.box}>
      {!!data.matchDate && (
        <View className={style.date}>
          <View className={style.icon}>
            <IconFont name="rili" color={['#74808E']} size={30} />
          </View>
          <Text className={style.text}>{dealDate(data.matchDate)}</Text>
        </View>
      )}
      {data.leaueMatches.map((league) => {
        return (
          <View key={league.leagueId} className={style.leagueBox}>
            <View className={style.league}>
              <View className={style.leagueName}>
                <View className={style.icon}>
                  <IconFont
                    name={GAME_TYPES[league.gameType].icon}
                    color={[
                      GAME_TYPES[league.gameType].color,
                      GAME_TYPES[league.gameType].color
                    ]}
                    size={30}
                  />
                </View>
                <Text className={style.name}>{league.leagueName}</Text>
                <Text className={style.bo}>BO{league.bo}</Text>
              </View>
              <View>
                <IconFont name="jinru" color={['#C4CCD7']} size={30} />
              </View>
            </View>
            {league.matches.map((match) => {
              return <MatchItem key={match.matchId} data={match} />
            })}
          </View>
        )
      })}
    </View>
  )
}

export default LeagueItem
