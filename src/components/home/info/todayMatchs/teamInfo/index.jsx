import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import style from './Style.module.scss'

const TeamInfo = ({ data = {} }) => {
  return (
    <View className={style.box}>
      <View className={style.logo}>
        <Image mode="widthFix" className={style.img} src={data.logo} />
      </View>
      <Text className={style.name}>{data.name}</Text>
    </View>
  )
}

export default TeamInfo
