import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import style from './WalletMenu.module.scss'

const WalletMenu = ({ menuList }) => {
  return (
    <View className={style.walletMenu}>
      {menuList.map((item) => (
        <View className={style.item} key={item.key}>
          <Image className={style.img} src={item.img} />
          <View className={style.name}>{item.name}</View>
        </View>
      ))}
    </View>
  )
}

export default WalletMenu
