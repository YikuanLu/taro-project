import Taro, { useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'

import style from './Style.module.scss'

const StaticTab = ({ data = [], onClick }) => {
  const [curTab, setCurTab] = useState(data[0])
  const switchTab = (val) => {
    setCurTab(val)
    onClick(val)
  }
  return (
    <ScrollView
      enable-flex="true"
      className={style.box}
      scrollX
      scrollWithAnimation
    >
      {data.map((item) => {
        return (
          <View
            key={item}
            onClick={() => switchTab(item)}
            className={classNames(style.item, {
              [style.active]: curTab === item
            })}
          >
            {item}
          </View>
        )
      })}
    </ScrollView>
  )
}

export default StaticTab
