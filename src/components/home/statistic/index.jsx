import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import TopBar from '@/components/common/topBar'
import style from './Style.module.scss'

const Statistic = () => {
  return (
    <View className={style.container}>
      <TopBar title="数据" />
    </View>
  )
}

export default Statistic
