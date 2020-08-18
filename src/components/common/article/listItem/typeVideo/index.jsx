import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'

import videoIcon from '@/assets/img/user/bf@2x.png'

import Status from '@/components/common/article/listItem/status'

import style from './TypeVideo.module.scss'

const TypeVideo = ({ data }) => {
  return (
    <View className={style.typeVideo}>
      <View className={style.title}>{data.title}</View>
      <View
        style={{
          backgroundImage: `url(${data.coverPicUrl})`
        }}
        className={style.mainContent}
      >
        <Image className={style.img} src={videoIcon} />
      </View>
      <Status
        gameType={data.gameType}
        time={data.createdTime}
        readTimes={data.clickTimes + data.initClickTimes}
        category_dictText={data.category_dictText}
      />
    </View>
  )
}

TypeVideo.propTypes = {
  data: PropTypes.object
}

TypeVideo.defaultProps = {
  data: {}
}

export default TypeVideo
