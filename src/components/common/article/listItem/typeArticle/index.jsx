import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import { ELLIPSOS } from '@/assets/js/types'

import Status from '@/components/common/article/listItem/status'

import style from './TypeArticle.module.scss'

const TypeArticle = ({ data }) => {
  return (
    <View className={style.typeArticle}>
      <View className={style.content}>
        <View className={style.title} style={ELLIPSOS}>
          {data.title}
        </View>
        <Status
          gameType={data.gameType}
          time={data.createdTime}
          readTimes={data.clickTimes + data.initClickTimes}
          category_dictText={data.category_dictText}
        />
      </View>
      <View className={style.coverPic}>
        <Image className={style.img} src={data.coverPicUrl} />
      </View>
    </View>
  )
}

TypeArticle.propTypes = {
  data: PropTypes.object
}

TypeArticle.defaultProps = {
  data: {}
}

export default TypeArticle
