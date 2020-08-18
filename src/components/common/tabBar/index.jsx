import Taro, { useState, useContext, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import { TAB_LIST } from '@/assets/js/types'
import MyContext from '@/utils/context'
import { setTab } from '@/assets/js/publicFn'
import './index.scss'

const TabBar = ({ onClick }) => {
  const initTab = Taro.getStorageSync('tabIndex') || 1
  // 默认参数配置
  const context = useContext(MyContext) || {}
  const { state = {}, dispatch } = context
  const { tabIndex = 1 } = state

  const defaultProps = {
    current: tabIndex,
    color: '#657180',
    activeColor: '#3F8FFD',
    tabList: TAB_LIST
  }

  const { current, color, activeColor, tabList } = defaultProps
  const [curTab, setCurTab] = useState(current)

  const switchTab = (item) => {
    if (item.id === 4) {
      Taro.navigateTo({ url: '/pages/appDownload/index' })
      return
    }
    // setCurTab(item.id)
    onClick(item)
    setTab(dispatch, item.id)
  }

  useEffect(() => {
    setCurTab(initTab)
  }, [initTab])

  return (
    <View className="taro-tabbar">
      <View className="taro-tabbar-list">
        {tabList.map((item) => {
          return (
            <View
              className={classNames('taro-tabbar-item', {
                'taro-tabbar-item-lg': item.large
              })}
              key={item.id}
              onClick={() => switchTab(item)}
            >
              <Image
                className="taro-tabbar-icon"
                src={curTab === item.id ? item.iconActive : item.icon}
              />
              <Text
                className="taro-tabbar-title"
                style={{ color: curTab === item.id ? activeColor : color }}
              >
                {item.text}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default TabBar
