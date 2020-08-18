import Taro, { useContext } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import IconFont from '@/icon'
import MyContext from '@/utils/context'
import { setTab, isLogin } from '@/assets/js/publicFn'
import initAvatar from '@/assets/img/avatar.png'

import style from './Style.module.scss'

const TopBar = ({ title }) => {
  // 使用优秀的useContext来获取到Context的值
  const context = useContext(MyContext) || {}
  const { dispatch } = context
  const userInfo = Taro.getStorageSync('userInfor')

  // 登录
  const toLogin = () => {
    Taro.navigateTo({ url: '/pages/login/index' })
  }
  // 到用户中心
  const toUser = () => {
    if (!isLogin()) {
      toLogin()
      return
    }
    setTab(dispatch, 5)
  }
  // 到消息
  const toMessage = () => {
    if (!isLogin()) {
      toLogin()
      return
    }
  }
  // 到钱包
  const toMoney = () => {
    if (!isLogin()) {
      toLogin()
      return
    }
  }
  return (
    <View>
      <View className={style['taro-navbar']}>
        <View className={style['left-part']}>
          <Image
            onClick={() => toUser()}
            className={style.avatar}
            src={userInfo.headPic || initAvatar}
          />
        </View>
        <Text className={style['taro-navbar-title']}>{title}</Text>
        <View className={style['right-part']}>
          <View
            onClick={() => toMessage()}
            className={style['taro-navbar-box']}
          >
            <IconFont
              className={style['right-icon']}
              name="xinxi"
              color={['#fff', '#fff']}
              size={40}
            />
          </View>
          <View onClick={() => toMoney()} className={style['taro-navbar-box']}>
            <IconFont
              className={style['right-icon']}
              name="qianbao"
              color={['#fff', '#fff']}
              size={40}
            />
          </View>
        </View>
      </View>
      <View className={style['taro-navbar-placer']}></View>
    </View>
  )
}

export default TopBar
