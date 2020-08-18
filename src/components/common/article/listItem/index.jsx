import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import TypeArticle from '@/components/common/article/listItem/typeArticle'
import TypePic from '@/components/common/article/listItem/typePic'
import TypeVideo from '@/components/common/article/listItem/typeVideo'

import style from './AirticleListItem.module.scss'

const AirticleListItem = ({ type, data }) => {
  return (
    <View className={style.airticleListItem}>
      {type === 'article' ? (
        <TypeArticle data={data} />
      ) : type === 'picture' ? (
        <TypePic data={data} />
      ) : (
        <TypeVideo data={data} />
      )}
    </View>
  )
}

export default AirticleListItem
