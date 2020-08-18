import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'

import AirticleListItem from '@/components/common/article/listItem'

import style from './ContentList.module.scss'

const ContentList = ({ rows }) => {
  return (
    <View className={style.contentList}>
      {rows.map((item) => (
        <AirticleListItem key={item.id} data={item} type={item.type} />
      ))}
    </View>
  )
}

ContentList.propTypes = {
  rows: PropTypes.array
}

ContentList.defaultProps = {
  rows: []
}

export default ContentList
