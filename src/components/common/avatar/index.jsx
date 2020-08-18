import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import defaultAvart from '@/assets/img/avatar.png'

import style from './Avatar.module.scss'

const Avatar = ({ headPic }) => {
  return (
    <View className={style.avart}>
      {headPic ? (
        <Image className={style.img} src={headPic} />
      ) : (
        <Image className={style.img} src={defaultAvart} />
      )}
    </View>
  )
}

Avatar.propTypes = {
  headPic: PropTypes.string
}

Avatar.defaultProps = {
  headPic: ''
}

export default Avatar
