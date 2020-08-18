import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import IconFont from '@/icon'
import NavBar from '@/components/common/navBar'
import { isLogin } from '@/assets/js/publicFn'
import { GAME_TYPES } from '@/assets/js/types'
import { getUserGameRealtion, setUserGameRealtion } from '@/api/extra'
import style from './Style.module.scss'

const Guide = () => {
  const initGameTypes = Object.keys(GAME_TYPES) // 所有的游戏类型
  const [gameData, setGameData] = useState([]) // 选择的游戏类型
  const [optionData, setOptionData] = useState(initGameTypes) // 可选的游戏类型
  const gameTypes = Taro.getStorageSync('gameTypes') // 已选择的游戏类型

  // 第一次请求数据
  useEffect(() => {
    // 如果有本地存储，读本地的, 否则请求接口
    if (gameTypes) {
      setGameData(gameTypes)
      return
    }
    getUserGameRealtion().then((res) => {
      // 用户如果没有选择，就用全部的
      if (res) {
        setGameData(res.split(','))
      } else {
        setGameData(initGameTypes)
      }
    })
  }, [])

  //转换数据
  const transformGame = (data, val) => {
    const index = data.indexOf(val)
    const leftData = data
    leftData.splice(index, 1)
    return leftData
  }

  // 选择游戏后的回调
  useEffect(() => {
    let newArr = []
    gameData.map((item) => {
      newArr = transformGame(initGameTypes, item)
    })
    setOptionData(newArr)
    Taro.setStorageSync('gameTypes', gameData)
  }, [gameData.length])

  //删除选择的游戏
  const deleteGame = (val) => {
    if (gameData.length < 2) {
      Taro.showToast({
        title: '请至少选择一个游戏',
        icon: 'none'
      })
      return
    }
    const leftData = transformGame(gameData, val)
    setGameData(leftData)
  }

  //选择游戏
  const selectGame = (val) => {
    setGameData([...gameData, val])
  }

  //提交
  const submit = () => {
    Taro.setStorageSync('gameTypes', gameData)
    // 如果没有token, 直接跳转首页
    if (!isLogin()) {
      Taro.navigateTo({ url: '/pages/index/index' })
      return
    }
    const gameStr = gameData.join(',')
    setUserGameRealtion({ content: gameStr }).then(() => {
      Taro.showToast({
        title: '操作成功'
      }).then(() => {
        Taro.navigateTo({ url: '/pages/index/index' })
      })
    })
  }

  return (
    <View className={style.guideIndex}>
      <NavBar
        noBack
        title="游戏选择"
        rightConfig={{
          firstType: 'text',
          firstVal: '完成',
          firstClick: () => submit()
        }}
      />
      <View className={style.title}>
        <Text className={style.text}>已选游戏</Text>
        <Text className={style.textSmall}>（点击可取消关注）</Text>
      </View>
      <View className={style.gameList}>
        {gameData.map((k) => {
          return (
            <View
              key={GAME_TYPES[k].name}
              className={style.gameItem}
              onClick={() => deleteGame(k)}
            >
              <View className={style.iconFont}>
                <IconFont
                  name={GAME_TYPES[k].icon}
                  color={GAME_TYPES[k].color}
                  size={90}
                />
              </View>
              <View className={style.gameName}>{GAME_TYPES[k].name}</View>
              <View className={style.iconClose}>
                <IconFont
                  name="guanbidefuben"
                  color={['#bcc629', '#fff', '#fff']}
                  size={30}
                />
              </View>
            </View>
          )
        })}
      </View>
      <View className={style.title}>
        <Text className={style.text}>可选游戏</Text>
        <Text className={style.textSmall}>
          （可选择多款游戏，使用过程中可随时调整）
        </Text>
      </View>
      <View className={style.gameList}>
        {optionData.map((k) => {
          return (
            <View
              key={GAME_TYPES[k].name}
              className={style.gameItem}
              onClick={() => selectGame(k)}
            >
              <View className={style.iconFont}>
                <IconFont
                  name={GAME_TYPES[k].icon}
                  color={GAME_TYPES[k].color}
                  size={90}
                />
              </View>
              <View className={style.gameName}>{GAME_TYPES[k].name}</View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

Guide.config = {
  navigationBarTitleText: '游戏选择'
}

export default Guide
