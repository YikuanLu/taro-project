import Taro from '@tarojs/taro'
import { View, Image, Text, Navigator } from '@tarojs/components'

import IconFont from '@/icon'
import logo from '@/assets/img/dl-logo.png'
import logoText from '@/assets/img/dl-logo-text.png'
import style from './Style.module.scss'

const AppDownLoad = () => {
  return (
    <View className={style.box}>
      <Image className={style.logo} src={logo} />
      <Image className={style.logoText} src={logoText} />
      <View className={style.text}>专业的综合型电竞数据平台</View>
      <View className={style.text}>赛事直播、数据分析、游戏资讯、玩家社区</View>
      <View className={style.btns}>
        <Navigator url="https://shangniu.cn" className={style.btn}>
          <View className={style.iconfont}>
            <IconFont name="pingguo" color="#fff" size={50} />
          </View>
          <Text className={style.text}>iPhone下载</Text>
        </Navigator>
        <Navigator url="https://shangniu.cn" className={style.btn}>
          <View className={style.iconfont}>
            <IconFont name="anzhuo" color="#fff" size={50} />
          </View>
          <Text className={style.text}>Android下载</Text>
        </Navigator>
      </View>
    </View>
  )
}

AppDownLoad.config = {
  navigationBarTitleText: '尚牛电竞App下载'
}

export default AppDownLoad
