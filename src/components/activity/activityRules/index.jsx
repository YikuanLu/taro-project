import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import IconFont from '@/icon'
import style from './Style.module.scss'

const Rules = ({ onClose }) => {
  return (
    <View className={style.box}>
      <View className={style.mask}></View>
      <View className={style.rulePopup}>
        <View className={style.iconfont} onClick={() => onClose()}>
          <IconFont name="guanbi" color="#C3CBD6" size={30} />
        </View>
        <View className={style.rulesBox}>
          <View className={style.text}>活动规则：</View>
          <View className={style.text}>
            1.用户成功注册，即可得1元现金和10牛币
          </View>
          <View className={style.text}>
            2.用户注册成功后30天内下载APP，首次登录APP可得1 元现金
          </View>
          <View className={style.text}>
            3.用户注册成功后30天内APP累计阅读10篇作品（包含文章、图片、视频），每篇文章观看10s以上得1元现金
          </View>
          <View className={style.text}>
            4.用户注册成功后30天内，在APP累计看10场比赛，每 场5分钟得2元现金
          </View>
          <View className={style.text}>
            5.用户注册后30天内，在APP连续7天每天分享1次以上 比赛得5元现金
          </View>
          <View className={style.text}>
            6.奖励发放：完成任务后，实时发放至尚牛账户可用余额中，可用余额的钱可直接提现到银行卡
          </View>
          <View className={style.text}>
            7.尚牛在法律允许范围内拥有本次活动最终解释权，如有发
            现作弊行为将取消所有奖励，尚牛可能会根据实际业务情况
            对活动进行调整，该调整不会影响到之前参与活动的用户，
            如有任何问题请咨询客服。
          </View>
        </View>
      </View>
    </View>
  )
}

export default Rules
