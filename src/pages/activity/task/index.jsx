import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import { isLogin } from '@/assets/js/publicFn'
import { getUserAccountInfor } from '@/api/user'

import NavBar from '@/components/common/navBar'
import Avatar from '@/components/common/avatar'
import TaskForm from '@/components/activity/task/form'
import TaskList from '@/components/activity/task/list'

import style from './Task.module.scss'

const ActivityTask = () => {
  const [userInfor, setUserInfor] = useState({})
  useEffect(() => {
    const headPic = Taro.getStorageSync('userInfor')
    setUserInfor(headPic)
  }, [])

  const [userAccountInfor, setUserAccountInfor] = useState({})
  const token = Taro.getStorageSync('token')
  useEffect(() => {
    if (token) {
      getUserAccountInfor().then((res) => {
        setUserAccountInfor(res)
      })
    }
  }, [])

  const isShowTash = isLogin()
  const { headPic } = userInfor
  return (
    <View className={style.activityTask}>
      <NavBar transparent title="" />
      <View className={style.banner}>
        <Image
          className={style.img}
          src="https://www.shangniu.cn/h5/img/task-banner1.png"
        />
      </View>
      {token && (
        <View className={style.userData}>
          <Avatar headPic={headPic} />
          <Text>
            我已经赚得
            <Text className={style.count}>
              {userAccountInfor.amountBalance}
            </Text>
            元现金
            <Text className={style.count}>{userAccountInfor.coinQuantity}</Text>
            牛币
          </Text>
        </View>
      )}
      {isShowTash && <TaskList />}
      {!isShowTash && (
        <View className={style.formBox}>
          <TaskForm />
        </View>
      )}

      <View className={style.rulesBox}>
        <View>活动规则：</View>
        <View>1.用户成功注册，即可得1元现金和10牛币</View>
        <View>2.用户注册成功后30天内下载APP，首次登录APP可得1 元现金</View>
        <View>
          3.用户注册成功后30天内APP累计阅读10篇作品（包含
          文章、图片、视频），每篇文章观看10s以上得1元现金
        </View>
        <View>
          4.用户注册成功后30天内，在APP累计看10场比赛，每 场5分钟得2元现金
        </View>
        <View>
          5.用户注册后30天内，在APP连续7天每天分享1次以上 比赛得5元现金
        </View>
        <View>
          6.奖励发放：完成任务后，实时发放至尚牛账户可用余额中
          ，可用余额的钱可直接提现到银行卡
        </View>
        <View>
          7.尚牛在法律允许范围内拥有本次活动最终解释权，如有发
          现作弊行为将取消所有奖励，尚牛可能会根据实际业务情况
          对活动进行调整，该调整不会影响到之前参与活动的用户，
          如有任何问题请咨询客服。
        </View>
      </View>
    </View>
  )
}

ActivityTask.config = {
  navigationBarTitleText: '新手活动'
}
export default ActivityTask
