import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import moment from '@/utils/moment'

import { BILL_TITLES } from '@/assets/js/types'
import { formatTime } from '@/assets/js/publicFn'

import style from './DetailItem.module.scss'

const DetailItem = ({ data }) => {
  const date = moment(data.createdTime).format('x')
  return (
    <View className={style.detailItem}>
      <View className={style.content}>
        <View className={style.title}>{BILL_TITLES[data.type]}</View>
        <View className={style.time}>
          {formatTime(date, 'YYYY-MM-DD HH:mm:ss')}
        </View>
      </View>
      <View className={style.account}>{data.amount || data.quantity}</View>
    </View>
  )
}

export default DetailItem
