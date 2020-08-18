import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import IconFont from '@/icon'
import style from './Style.module.scss'

const LiveAppDownload = ({ data = {} }) => {
  return (
    <View className={style.box}>
      {/* 首小龙、首大龙、首塔、十杀、五杀、一血、 */}
      {data.is_first_small_dragon && (
        <View className={style.iconfont}>
          <IconFont name="xiaolong" color="#C2C2C2" size={28} />
        </View>
      )}
      {data.is_first_big_dragon && (
        <View className={style.iconfont}>
          <IconFont name="dalong" color="#C2C2C2" size={28} />
        </View>
      )}
      {data.is_first_tower && (
        <View className={style.iconfont}>
          <IconFont name="tafang" color="#C2C2C2" size={28} />
        </View>
      )}
      {data.is_ten_kills && (
        <View className={style.iconfont}>
          <IconFont name="sha1" color={['#C2C2C2', '#FF5230']} size={28} />
        </View>
      )}
      {data.is_five_kills && (
        <View className={style.iconfont}>
          <IconFont name="sha" color={['#C2C2C2', '#FF5230']} size={28} />
        </View>
      )}
      {data.is_first_blood && (
        <View className={style.iconfont}>
          <IconFont name="yixie" color="#FF5230" size={28} />
        </View>
      )}
      {/* csgo的 先胜5回合、16回合胜利、首回合胜利*/}
      {data.isFirstWin5Score && (
        <View className={style.iconfont}>
          <IconFont name="five_round" color={['#FF5230', '#fff']} size={28} />
        </View>
      )}
      {data.isFirstWin16Score && (
        <View className={style.iconfont}>
          <IconFont
            name="last_round"
            color={['#C2C2C2', '#FF5230']}
            size={28}
          />
        </View>
      )}
      {data.isFirstKill && (
        <View className={style.iconfont}>
          <IconFont
            name="first_round"
            color={['#C2C2C2', '#FF5230']}
            size={28}
          />
        </View>
      )}
    </View>
  )
}

export default LiveAppDownload
