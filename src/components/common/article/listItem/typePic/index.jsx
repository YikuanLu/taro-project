import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import Status from '@/components/common/article/listItem/status'

import style from './TypePic.module.scss'

const TypePic = ({ data }) => {
  if (!data) return null
  const { picsUrl = '' } = data
  const imgList = picsUrl.split(',')
  return (
    <View className={style.typePic}>
      <View className={style.title}>{data.title}</View>
      <View className={style.mainContent}>
        {imgList.map((item) => (
          <View
            className={style.itemImg}
            key={item}
            onClick={() => {
              Taro.previewImage({
                urls: [item]
              })
            }}
          >
            <Image mode="widthFix" className={style.img} src={item} />
          </View>
        ))}
      </View>
      <View className={style.statusBox}>
        <Status
          gameType={data.gameType}
          time={data.createdTime}
          readTimes={data.clickTimes + data.initClickTimes}
          category_dictText={data.category_dictText}
        />
      </View>
    </View>
  )
}

TypePic.propTypes = {
  data: PropTypes.object
}

TypePic.defaultProps = {
  data: {}
}

export default TypePic
