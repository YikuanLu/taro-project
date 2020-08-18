import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@/icon'
import IconGameTyle from '@/components/common/iconGameTyle'

import { dateForNow } from '@/assets/js/publicFn'

import style from './Status.module.scss'

const Status = ({ gameType, time, readTimes, category_dictText }) => {
  return (
    <View className={style.statue}>
      <View className={style.itemPart}>
        <IconGameTyle gameType={gameType} />
        <Text className={style.artType}>{category_dictText}</Text>
      </View>
      <View className={style.itemPart}>{dateForNow(time)}</View>
      <View className={style.itemPart}>
        <IconFont name="yanjing1" color="#C3CBD6" size={22} />
        <Text className={style.text}>{readTimes}</Text>
      </View>
    </View>
  )
}

export default Status
