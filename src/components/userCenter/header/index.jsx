import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import defaultAvart from '@/assets/img/avatar.png'

import style from './Header.module.scss'

const Header = ({ userInfor }) => {
  return (
    <View className={style.header}>
      <View className={style.avart}>
        {userInfor.headPic ? (
          <Image className={style.img} src={userInfor.headPic} />
        ) : (
          <Image className={style.img} src={defaultAvart} />
        )}
      </View>
      <View className={style.descText}>
        <View className={style.nickName}>{userInfor.nickName}</View>
        <View className={style.phone}>{userInfor.phone}</View>
      </View>
    </View>
  )
}

export default Header
