import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import IconFont from '@/icon'
import style from './Style.module.scss'

const TeamMoney = ({ data = {}, role = 'blue' }) => {
  const money = data.money || data.gold
  return (
    <View className={classNames(style.box, { [style.red]: role === 'red' })}>
      <IconFont name="jinbidefuben1" color="#FFA847" size={30} />
      <Text className={style.num}>{money}</Text>
    </View>
  )
}

export default TeamMoney
