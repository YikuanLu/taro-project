import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import style from './CommentItem.module.scss'

const CommentItem = ({ data }) => {
  return (
    <View className={style.commentItem}>
      <View className={`${style.title} ellipsis`}>{data.title}</View>
      <View className={`${style.content} ellipsis`}>{data.content}</View>
    </View>
  )
}

CommentItem.propTypes = {
  data: PropTypes.object
}

CommentItem.defaultProps = {
  data: {}
}

export default CommentItem
