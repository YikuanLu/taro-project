import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import IconFont from '@/icon'
import style from './Style.module.scss'

const StaticTable = ({ data, baseInfo }) => {
  const [staticData, setStaticData] = useState([])

  // 获取总共几局
  const getBoards = () => {
    const boardArr = []
    data.map((item) => {
      !boardArr.includes(item.boardNum) && boardArr.push(item.boardNum)
    })
    return boardArr.sort()
  }

  const sortBNum = (val) => {
    // 根据boardNum筛选出对应的数据
    const boardData = data.filter((item) => item.boardNum === val)
    return boardData
  }

  // 处理最终数据
  const dealDrawData = () => {
    const boards = getBoards()
    const boardArr = []
    boards.map((item) => {
      const json = {
        id: item,
        name: `第${item}局`,
        data: sortBNum(item)
      }
      boardArr.push(json)
    })
    if (boards.includes(0)) {
      boardArr[0].name = '全场'
    }
    setStaticData(boardArr)
  }

  useEffect(() => {
    dealDrawData()
  }, [data])

  if (!data || !data.length) return
  return (
    <View className={style.box}>
      <View className={style.teams}>
        <Image className={style.logo} src={baseInfo.teamALogo} />
        <Image className={style.logo} src={baseInfo.teamBLogo} />
      </View>
      <View className={style.list}>
        {staticData.map((item) => {
          return (
            <View key={item.id} className={style.item}>
              <View className={style.betName}>{item.name}</View>
              {item.data.map((option) => {
                const teamA = option.optionList[0]
                const teamB = option.optionList[1]
                const teamATrend = teamA.trend
                const teamBTrend = teamB.trend
                return (
                  <View key={option.id} className={style.row}>
                    <View
                      className={classNames(
                        style.index,
                        { [style.down]: teamATrend === -1 },
                        { [style.up]: teamATrend === 1 }
                      )}
                    >
                      <Text className={style.text}>{teamA.odds}</Text>
                      {teamATrend === -1 && (
                        <IconFont
                          name="jiantou-copy"
                          color={['#2ECC71']}
                          size={20}
                        />
                      )}
                      {teamATrend === 1 && (
                        <IconFont
                          name="jiantou"
                          color={['#F04844']}
                          size={20}
                        />
                      )}
                    </View>
                    <Text className={style.betItem}>{option.title}</Text>
                    <View
                      className={classNames(
                        style.index,
                        { [style.down]: teamBTrend === -1 },
                        { [style.up]: teamBTrend === 1 }
                      )}
                    >
                      <Text className={style.text}>{teamB.odds}</Text>
                      {teamBTrend === -1 && (
                        <IconFont
                          name="jiantou-copy"
                          color={['#2ECC71']}
                          size={20}
                        />
                      )}
                      {teamBTrend === 1 && (
                        <IconFont
                          name="jiantou"
                          color={['#F04844']}
                          size={20}
                        />
                      )}
                    </View>
                  </View>
                )
              })}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default StaticTable
