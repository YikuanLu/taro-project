import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import { formatTime } from '@/assets/js/publicFn'

import IconFont from '@/icon'

// iconshijian

import style from './MatchStatus.module.scss'

const MatchStatus = ({ data }) => {
  // 比赛状态{0:未开始 1:进行中 2:已结束}
  const { status, sort, matchTime, teamAScore, teamBScore } = data
  return (
    <View className={style.matchStatus}>
      {status === 0 ? (
        <View>
          <IconFont name="shijian" color="#C3CBD6" size={40} />
        </View>
      ) : (
        <View className={style.score}>{`${teamAScore}-${teamBScore}`}</View>
      )}
      <View className={style.desc}>
        <Text className={style.text}>
          {status === 0 ? '未开始' : status === 1 ? `第${sort}局` : '已结束'}
        </Text>
        <Text className={style.text}>{formatTime(matchTime, 'HH:mm')}</Text>
      </View>
    </View>
  )
}

MatchStatus.propTypes = {
  data: PropTypes.object // Tabs列表
}

MatchStatus.defaultProps = {
  data: {}
}

export default MatchStatus
