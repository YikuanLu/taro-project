import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import style from './Style.module.scss'

const InfoTypes = ({ onClick }) => {
  const [curTab, setCurTab] = useState('')

  // 切换游戏
  const switchGame = (val) => {
    setCurTab(val)
    onClick(val)
  }

  const tabList = [
    { id: '', title: '全部' },
    { id: 'article', title: '文章' },
    { id: 'video', title: '视频' },
    { id: 'picture', title: '图集' }
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

export default InfoTypes
