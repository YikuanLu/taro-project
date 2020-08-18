import Taro, { useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'

import style from './Style.module.scss'

const RoundTab = ({ data = [], onClick }) => {
  const len = data.length
  const [curTab, setCurTab] = useState(len > 0 && data[len - 1].id)
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
            onClick={() => switchTab(item.id)}
            className={classNames(style.item, {
              [style.active]: curTab === item.id
            })}
          >
            {item.name}
          </View>
        )
      })}
    </ScrollView>
  )
}

export default RoundTab
