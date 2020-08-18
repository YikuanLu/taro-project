import Taro, { useState, useEffect } from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import classNames from 'classnames'

import { GAME_TYPES } from '@/assets/js/types'
import IconFont from '@/icon'
import { getUserGameRealtion } from '@/api/extra'
import style from './Style.module.scss'

const GameType = ({ onClick }) => {
  const initGameTypes = Object.keys(GAME_TYPES) // 所有的游戏类型
  const gameTypes = Taro.getStorageSync('gameTypes') || initGameTypes // 已选择的游戏类型
  const [curTab, setCurTab] = useState('all') // 当前栏目
  const [showData, setShowData] = useState({
    // 要显示的游戏类型
    follow: { name: '关注' },
    all: { name: '全部' }
  })

  // 处理数据
  const dealData = (data) => {
    const initGames = {}
    data.map((item) => {
      initGames[item] = GAME_TYPES[item]
    })

    setShowData({
      ...showData,
      ...initGames
    })
  }

  // 第一次请求数据
  useEffect(() => {
    // 如果有本地存储，读本地的, 否则请求接口
    if (gameTypes) {
      dealData(gameTypes)
      return
    }
    getUserGameRealtion().then((res) => {
      // 用户如果没有选择，就用全部的
      if (res) {
        dealData(res.split(','))
      } else {
        dealData(gameTypes)
      }
    })
  }, [])

  // 切换游戏
  const switchGame = (val) => {
    setCurTab(val)
    onClick(val)
  }
  // 到游戏选择页
  const toGuide = () => {
    Taro.navigateTo({ url: '/pages/guide/index' })
  }

  return (
    <View className={style.box}>
      <ScrollView
        enable-flex="true"
        className={style.scrollview}
        scrollX
        scrollWithAnimation
      >
        {Object.keys(showData).map((k) => {
          return (
            <View
              onClick={() => switchGame(k)}
              key={k}
              className={classNames(style.scrollItem, {
                [style.scrollItem_active]: curTab === k
              })}
            >
              {showData[k].name}
            </View>
          )
        })}
      </ScrollView>
      <View className={style.selectBox} onClick={toGuide}>
        <View className={style.selectIcon}>
          <IconFont
            name="chazhaobiaodanliebiao"
            color={['#C1C7CF']}
            size={40}
          />
        </View>
      </View>
    </View>
  )
}

export default GameType
