import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import { dateForNow } from '@/assets/js/publicFn'
import style from './Style.module.scss'

const LiveCommentItem = ({ data }) => {
  if (!data) return
  return (
    <View className={style.box}>
      <View className={style.avatar}>
        <Image className={style.img} src={data.headPic} />
      </View>
      <View className={style.content}>
        <View className={style.row}>
          <Text className={style.name}>{data.userName}</Text>
          <Text className={style.time}>{dateForNow(data.createdTime)}</Text>
        </View>
        <View className={style.row}>
          <Text className={style.text}>{data.content}</Text>
        </View>
      </View>
    </View>
  )
}

export default LiveCommentItem
