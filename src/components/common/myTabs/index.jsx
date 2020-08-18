import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'

import style from './MyTabs.module.scss'

const UserAttention = ({ tabsList, isScroll, currentIndex, onChange }) => {
  // 判断组件样式是否为滚动，如果 Tabs 数量不可预期或者较多的时候,传入 {isScroll=true} 开启滚动选项
  const myTabsClassName = isScroll ? style.scrollBox : style.myTabs
  return (
    <ScrollView scrollX enable-flex className={myTabsClassName}>
      {tabsList.map((item, index) => (
        <View
          className={`${style.tabItem} ${
            currentIndex === index ? style.active : null
          }`}
          key={item.key}
          onClick={() => {
            onChange(index)
          }}
        >
          {item.name}
        </View>
      ))}
    </ScrollView>
  )
}

UserAttention.propTypes = {
  tabsList: PropTypes.array, // Tabs列表
  isScroll: PropTypes.bool, // 是否滚动
  currentIndex: PropTypes.number // 选择项
}

UserAttention.defaultProps = {
  tabsList: [],
  isScroll: false,
  currentIndex: 0
}

export default UserAttention
