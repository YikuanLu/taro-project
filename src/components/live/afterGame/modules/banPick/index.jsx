import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import Heros from '@/components/live/afterGame/modules/banPick/heros'
import style from './Style.module.scss'

const BanPick = ({ data = {} }) => {
  if (!data.blue || !data.red) return
  const { blue, red } = data
  return (
    <View className={style.box}>
      <View className={style.row}>
        <Heros data={blue.ban_list} type="ban" />
        <View className={classNames(style.name, style.ban)}>BAN</View>
        <Heros data={red.ban_list} type="ban" align="left" />
      </View>
      <View className={style.row}>
        <Heros data={blue.pick_list} />
        <View className={style.name}>PICK</View>
        <Heros data={red.pick_list} align="left" />
      </View>
    </View>
  )
}

export default BanPick
