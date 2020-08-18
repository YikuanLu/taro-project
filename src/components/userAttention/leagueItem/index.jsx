import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@/icon'
import PropTypes from 'prop-types'

import MatchItem from '@/components/userAttention/leagueItem/matchItem'
import { switchUserNotifyMatch } from '@/api/user'
import { formatTime } from '@/assets/js/publicFn'

import LeagueTitle from './title'

import style from './LeagueItem.module.scss'

// 处理日期
const dealDate = (date) => {
  const now = new Date(date)
  const isToday = formatTime(new Date(), 'YYYY-MM-DD') === date ? '今天' : ''
  const showDate = formatTime(now, 'MM月DD日')
  const week = formatTime(now, 'dddd')
  return `${isToday} ${showDate} ${week}`
}

const LeagueItem = ({ data, triggerUpdata }) => {
  const { leaueMatches = [] } = data
  return (
    <View className={style.leagueItem}>
      <View className={style.dateBox}>
        <View className={style.icon}>
          <IconFont name="rili1" size={26} color="#464C5B" />
        </View>
        <View>{dealDate(data.matchDate)}</View>
      </View>
      {/* 联赛 */}
      {leaueMatches.map((item) => {
        const leagueTitleData = {
          gameType: item.gameType,
          leagueId: item.leagueId,
          leagueName: item.leagueName,
          bo: item.bo
        }
        const { matches } = item
        return (
          <View key={item.matchDate} className={style.content}>
            <LeagueTitle {...leagueTitleData} />
            {matches.map((ele) => (
              <View className={style.body} key={item.matchId}>
                <View className={style.leagueBody}>
                  <MatchItem data={ele} />
                </View>
                <View
                  onClick={() => {
                    const { matchId, gameType } = ele
                    switchUserNotifyMatch({ matchId, game: gameType }).then(
                      () => {
                        Taro.showToast({
                          title: '取消成功',
                          icon: 'none',
                          duration: 2000
                        })
                        triggerUpdata()
                      }
                    )
                  }}
                  className={style.btnBox}
                >
                  <Text>取消关注</Text>
                </View>
              </View>
            ))}
          </View>
        )
      })}
    </View>
  )
}

LeagueItem.propTypes = {
  data: PropTypes.object
}

LeagueItem.defaultProps = {
  data: {}
}

export default LeagueItem
