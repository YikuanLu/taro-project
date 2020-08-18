import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import style from './AccountInfo.module.scss'

const AccountInfo = ({ userAccount }) => {
  return (
    <View className={style.accountInfo}>
      <View className={style.partItem}>
        <View className={style.val}>{userAccount.coinQuantity || 0}</View>
        <View className={style.name}>可用牛币</View>
      </View>
      <View className={style.partItem}>
        <View className={style.val}>
          {userAccount.amountBalance || 0}
          {userAccount.amountBalance ? (
            <Text className={style.unit}>元</Text>
          ) : null}
        </View>
        <View className={style.name}>可用余额</View>
      </View>
    </View>
  )
}

export default AccountInfo
