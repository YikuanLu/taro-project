import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { getUserAccountInfor } from '@/api/user'
import { WALLET_MENNUS } from '@/assets/js/types'

import NavBar from '@/components/common/navBar'
import AccountInfo from '@/components/userWallet/accountInfo'
import WalletMenu from '@/components/userWallet/walletMenu'
import AdBanner from '@/components/common/adBanner'
import Billdetail from '@/components/userWallet/billdetail'

import style from './UserWallet.module.scss'

const UserWallet = () => {
  const [userAccount, setUserAccount] = useState({})
  useEffect(() => {
    if (Taro.getStorageSync('token')) {
      getUserAccountInfor().then((res) => {
        setUserAccount(res)
      })
    }
  }, [])

  return (
    <View className={style.userWallet}>
      <NavBar title="我的钱包" />
      <View className={style.header}>
        <AccountInfo userAccount={userAccount} />
      </View>
      <View className={style.menuBox}>
        <WalletMenu menuList={WALLET_MENNUS} />
      </View>
      {/* 此处对应广告 ID 为 203 */}
      <AdBanner paramsId={203} />
      <View className={style.billdetailBox}>
        <Billdetail />
      </View>
    </View>
  )
}

export default UserWallet
