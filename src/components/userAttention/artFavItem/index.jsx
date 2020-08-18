import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ArtItem from '@/components/common/article/listItem'

import { cancelUserFavoriteArtList } from '@/api/user'

import style from './ArtFavItem.module.scss'

const ArtFavItem = ({ data = {}, triggerUpdata }) => {
  return (
    <View className={style.artFavItem}>
      <ArtItem type={data.type} data={data} />
      <View className={style.btn}>
        <Text
          onClick={() => {
            console.log(data)
            cancelUserFavoriteArtList({ articleId: data.id }).then(() => {
              Taro.showToast({
                title: '取消成功',
                icon: 'none',
                duration: 2000
              })
              triggerUpdata()
            })
          }}
        >
          取消关注
        </Text>
      </View>
    </View>
  )
}

export default ArtFavItem
