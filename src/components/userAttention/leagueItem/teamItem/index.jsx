import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import IconFont from '@/icon'
import PropTypes from 'prop-types'

import style from './TeamItem.module.scss'

const TeamItem = ({ isRight, data }) => {
  const rightDesc = {
    'flex-direction': 'row-reverse'
  }
  const { teamTrend } = data
  // data.teamTrend [1:涨,0:平,-1:跌]
  return (
    <View className={style.teamItem}>
      <View className={style.teamDesc} style={isRight ? rightDesc : null}>
        <View className={style.name}>{data.teamShortName}</View>
        <View className={style.imgBox}>
          <Image mode="widthFix" className={style.img} src={data.teamLogo} />
        </View>
      </View>
      <View
        className={style.teamCount}
        style={{
          borderColor:
            teamTrend === -1
              ? '#2ECC71'
              : teamTrend === 1
              ? '#F04844'
              : '#f2f2f2'
        }}
      >
        <View className={style.numGroup}>
          <Text className={style.low}>{data.teamRangFen}</Text>
          <Text
            className={style.up}
            style={{
              color:
                teamTrend === -1
                  ? '#2ECC71'
                  : teamTrend === 1
                  ? '#F04844'
                  : '#9EA7B4'
            }}
          >
            {data.teamOdds ? data.teamOdds : '1.00'}
          </Text>
        </View>
        {teamTrend === -1 ? (
          <IconFont name="jiantou-copy" color="#2ECC71" size={16} />
        ) : teamTrend === 1 ? (
          <IconFont name="jiantou" color="#F04844" size={16} />
        ) : null}
      </View>
    </View>
  )
}

TeamItem.propTypes = {
  isRight: PropTypes.bool, // 右侧展示战队，图标在左边
  data: PropTypes.object
}

TeamItem.defaultProps = {
  isRight: false,
  data: {}
}

export default TeamItem
