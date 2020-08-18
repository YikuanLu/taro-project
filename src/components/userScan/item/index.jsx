import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { formatTime } from '@/assets/js/publicFn'

import style from './UserScanItem.module.scss'

const typeMap = {
  article: '文章',
  video: '视频',
  picture: '图集',
  match: '比赛'
}

const UserScanItem = ({ data }) => {
  return (
    <View className={style.listItem}>
      <View className={style.title}>{data.title}</View>
      <View className={style.desc}>
        <View className={style.type}>
          浏览类型：{typeMap[data.articleType]}
        </View>
        <View className={style.time}>
          {formatTime(data.createdTime, 'YY-MM-DD hh:mm:ss')}
        </View>
      </View>
    </View>
  )
}

export default UserScanItem
