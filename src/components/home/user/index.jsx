import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { getUserAccountInfor, getMsgOfUnread } from '@/api/user'

import Header from '@/components/home/user/header'
import UserInfor from '@/components/home/user/infor'
import Wallet from '@/components/home/user/wallet'
import Task from '@/components/home/user/task'
import Menu from '@/components/home/user/menu'

import style from './User.module.scss'

const User = () => {
  const [userInfor, setUserInfor] = useState({})
  useEffect(() => {
    const headPic = Taro.getStorageSync('userInfor')
    setUserInfor(headPic)
  }, [])

  const [userAccount, setUserAccount] = useState({})
  useEffect(() => {
    if (Taro.getStorageSync('token')) {
      getUserAccountInfor().then((res) => {
        setUserAccount(res)
      })
    }
  }, [])

  const [msgTotle, setMsgTotle] = useState(0)
  useEffect(() => {
    if (Taro.getStorageSync('token')) {
      getMsgOfUnread().then((res) => {
        const totail = res[0] + res[1]
        setMsgTotle(totail)
      })
    }
  }, [])

  return (
    <View className={style.user}>
      <Header msgTotle={msgTotle} />
      <UserInfor userInfor={userInfor} />
      <Wallet userAccount={userAccount} />
      <Task />
      <Menu />
    </View>
  )
}

export default User
