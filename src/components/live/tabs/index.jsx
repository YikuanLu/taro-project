import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import { getMatchTab } from '@/api/battle'
import { LIVE_TAB_LIST } from '@/assets/js/types'
import style from './Style.module.scss'

const LiveTabs = ({ onClick, matchParams }) => {
  const [curTab, setCurTab] = useState(2)
  const [tabs, setTabs] = useState(LIVE_TAB_LIST)
  const { gameType = 'lol', matchId } = matchParams || {}

  // 查找tab对应的索引
  const findIndex = (val) => {
    const findItem = LIVE_TAB_LIST.filter((item) => {
      return item.type === val
    })
    return findItem[0]
  }

  useEffect(() => {
    // 获取赛事需要显示的tab
    getMatchTab({ gameType, matchId }).then((res) => {
      const showTab = [{ id: 2, title: '全网指数' }]
      res.showProspect && showTab.unshift(findIndex('showProspect'))
      res.showLive && showTab.push(findIndex('showLive'))
      res.showStat && showTab.push(findIndex('showStat'))
      res.showInfo && showTab.push(findIndex('showInfo'))
      setTabs(showTab)
    })
  }, [])

  // 切换游戏
  const switchGame = (val) => {
    setCurTab(val)
    onClick(val)
  }

  return (
    <View className={style.box}>
      {tabs.map((item) => {
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

export default LiveTabs
