import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@/icon'
import { WALLET_MENNUS } from '@/assets/js/types'

import WalletMenu from '@/components/userWallet/walletMenu'

import style from './Wallet.module.scss'

const Wallet = ({ userAccount }) => {
  return (
    <View className={style.wallet}>
      <View
        className={style.header}
        onClick={() => {
          Taro.navigateTo({ url: '/pages/userWallet/index' })
        }}
      >
        <Text className={style.text}>我的钱包</Text>
        <IconFont name="jinru" color="#C3CBD6" size={28} />
      </View>
      <View className={style.mainContent}>
        <View className={style.item}>
          <View className={style.count}>{userAccount.coinQuantity || 0}</View>
          <View className={style.title}>可用牛币</View>
        </View>
        <View className={style.item}>
          <View className={style.count}>
            {userAccount.amountBalance || 0}
            {userAccount.amountBalance ? (
              <Text className={style.unit}>元</Text>
            ) : null}
          </View>
          <View className={style.title}>可用余额</View>
        </View>
      </View>
      <WalletMenu menuList={WALLET_MENNUS} />
    </View>
  )
}

export default Wallet
