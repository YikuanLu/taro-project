import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import TeamItem from '@/components/userAttention/leagueItem/teamItem'
import MatchStatus from '@/components/userAttention/leagueItem/matchStatus'

import style from './MatchItem.module.scss'

const MatchItem = ({ data }) => {
  const teamAData = {
    teamShortName: data.teamAShortName,
    teamLogo: data.teamALogo,
    teamRangFen: data.teamARangFen,
    teamOdds: data.teamAOdds,
    teamTrend: data.teamATrend
  }
  const teamBData = {
    teamShortName: data.teamBShortName,
    teamLogo: data.teamBLogo,
    teamRangFen: data.teamBRangFen,
    teamOdds: data.teamBOdds,
    teamTrend: data.teamBTrend
  }
  return (
    <View className={style.matchItem}>
      <View className={style.itemPart}>
        <TeamItem data={teamAData} />
      </View>
      <View className={style.itemPart}>
        <MatchStatus data={data} />
      </View>
      <View className={style.itemPart}>
        <TeamItem data={teamBData} isRight />
      </View>
    </View>
  )
}

MatchItem.propTypes = {
  data: PropTypes.object
}

MatchItem.defaultProps = {
  data: {}
}

export default MatchItem
