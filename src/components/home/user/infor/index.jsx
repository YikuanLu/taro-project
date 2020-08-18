import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import defaultAvart from '@/assets/img/avatar.png'
import IconFont from '@/icon'
import style from './Infor.module.scss'

const UserInfor = ({ userInfor }) => {
  const unLoginVm = (
    <View
      className={style.userDesc}
      onClick={() => {
        Taro.navigateTo({ url: '/pages/login/index' })
      }}
    >
      <View className={style.avart}>
        <Image className={style.img} src={defaultAvart} />
      </View>
      <View className={style.descText}>
        <View className={style.nickName}>登录/注册</View>
        <View className={style.phone}>免费看比赛数据赚钱</View>
      </View>
    </View>
  )

  const loginVm = (
    <View
      className={style.userDesc}
      onClick={() => {
        Taro.navigateTo({ url: '/pages/userCenter/index' })
      }}
    >
      <View className={style.avart}>
        {userInfor.headPic ? (
          <Image className={style.img} src={userInfor.headPic} />
        ) : (
          <Image className={style.img} src={defaultAvart} />
        )}
      </View>
      <View className={style.descText}>
        <View className={style.nickName}>
          {userInfor.nickName}
          <View className={style.text}>
            <IconFont name="jinru" color="#C3CBD6" size={28} />
          </View>
        </View>
        <View className={style.phone}>{userInfor.phone}</View>
      </View>
    </View>
  )

  return (
    <View className={style.userInfor}>
      {userInfor ? loginVm : unLoginVm}
      <View className={style.taskBtn}>
        <View className={style.icon}>
          <IconFont name="jinbidefuben" size={30} />
        </View>
        <View>去领钱</View>
      </View>
    </View>
  )
}

export default UserInfor
