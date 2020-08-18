import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import style from './Empty.module.scss'

const Empty = () => {
  return <View className={style.empty}>暂无数据</View>
}

export default Empty
