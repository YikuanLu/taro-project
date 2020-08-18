import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import style from './Style.module.scss'

const MatchTypes = ({ onClick }) => {
  const [curTab, setCurTab] = useState('')

  // 切换游戏
  const switchGame = (val) => {
    setCurTab(val)
    onClick(val)
  }

  const tabList = [
    { id: '', title: '全部' },
    { id: 1, title: '直播' },
    { id: 0, title: '预赛' },
    { id: 2, title: '赛果' }
  ]

  return (
    <View className={style.box}>
      {tabList.map((item) => {
        return (
          <View
            onClick={() => switchGame(item.id)}
            key={item.id}
            className={classNames(style.item, {
              [style.item_active]: curTab === item.id
            })}
          >
            {item.title}
          </View>
        )
      })}
    </View>
  )
}

export default MatchTypes
