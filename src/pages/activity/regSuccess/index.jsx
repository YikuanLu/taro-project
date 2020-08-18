import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import TaskList from '@/components/activity/task/list'
import IconFont from '@/icon'
import style from './Style.module.scss'

const RegSuccess = () => {
  const toInfo = () => {
    Taro.navigateTo({ url: '/pages/index/index' })
  }

  return (
    <View className={style.box}>
      <View className={style.topBox}>
        <View className={style.iconfont} onClick={toInfo}>
          <IconFont name="guanbi" color="#C3CBD6" size={30} />
        </View>
        <View className={style.successText}>
          <View className={style.icon}>
            <IconFont name="gou" color="#fff" size={30} />
          </View>
          <Text className={style.text}>恭喜注册成功</Text>
        </View>
        <View className={style.tips}>
          已经赚得<Text className={style.num}>1</Text>元现金
          <Text className={style.num}>10</Text>牛币
        </View>
        <View
          className={style.downloadBtn}
          onClick={() => Taro.navigateTo({ url: '/pages/appDownload/index' })}
        >
          下载APP可提现
        </View>
      </View>
      <View className={style.taskList}>
        <TaskList />
      </View>
    </View>
  )
}

RegSuccess.config = {
  navigationBarTitleText: '注册成功'
}

export default RegSuccess
