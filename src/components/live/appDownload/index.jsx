import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import IconFont from '@/icon'
import style from './Style.module.scss'

const LiveAppDownload = () => {
  const toDownload = () => {
    Taro.navigateTo({ url: '/pages/appDownload/index' })
  }

  return (
    <View className={style.box}>
      <View className={style.iconfont}>
        <IconFont name="xiala" color={['#C3CBD6', '#C3CBD6']} size={30} />
      </View>
      <View className={style.btn} onClick={() => toDownload()}>
        观看更多详细数据 立即下载APP
      </View>
    </View>
  )
}

export default LiveAppDownload
