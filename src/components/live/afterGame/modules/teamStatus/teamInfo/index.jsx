import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import { mainColor } from '@/assets/js/types'
import style from './Style.module.scss'

const TeamInfo = ({ data = {}, gameType, role = 'blue' }) => {
  const logo = data.team_avatar || data.logo
  const name = data.team_short_name || data.name
  return (
    <View className={classNames(style.box, { [style.red]: role === 'red' })}>
      <Image className={style.logo} src={logo} />
      {gameType !== 'csgo' && (
        <Text className={style.name} style={{ color: mainColor[role] }}>
          {name}
        </Text>
      )}
    </View>
  )
}

export default TeamInfo
