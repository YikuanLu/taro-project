import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import NavBar from '@/components/common/navBar'
import UserScanList from '@/components/userScan/list'

const UserScan = () => {
  return (
    <View className="listContentBox">
      <NavBar title="我的浏览" />
      <View>
        <UserScanList />
      </View>
    </View>
  )
}

export default UserScan
