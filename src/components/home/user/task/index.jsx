import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IconFont from '@/icon'
import style from './Task.module.scss'

const Task = () => {
  return (
    <View className={style.task}>
      <View className={style.left}>
        <View className={style.title}>
          <View className={style.part}>任务</View>
          <View className={style.part}>中心</View>
        </View>
        <View className={style.line} />
        <View className={style.text}>
          <View>开始赚钱模式</View>
          <View>做任务轻松赚钱、赚牛币</View>
        </View>
      </View>
      <View className={style.right}>
        <View className={style.icon}>
          <IconFont name="jinbi" size={50} />
        </View>
        <View className={style.text}>赚牛币</View>
      </View>
    </View>
  )
}
export default Task
