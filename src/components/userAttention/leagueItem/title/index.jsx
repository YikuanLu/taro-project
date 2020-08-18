import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import IconFont from '@/icon'

import IconGameTyle from '@/components/common/iconGameTyle'

import style from './MatchTitle.module.scss'

const LeagueTitle = ({ gameType, leagueName, bo }) => {
  return (
    <View className={style.title}>
      <View className={style.left}>
        <IconGameTyle gameType={gameType} />
        <View className={style.name}>{leagueName}</View>
        <View>BO{bo}</View>
      </View>
      <IconFont name="jinru" color="#C3CBD6" size={28} />
    </View>
  )
}

LeagueTitle.propTypes = {
  gameType: PropTypes.string,
  leagueName: PropTypes.string,
  bo: PropTypes.number
}

LeagueTitle.defaultProps = {
  gameType: 'lol',
  leagueName: '--',
  bo: 0
}

export default LeagueTitle
