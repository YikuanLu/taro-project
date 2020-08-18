import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { mainColor } from '@/assets/js/types'
import style from './Style.module.scss'

const KdaLine = ({ data }) => {
  if (!data) return

  const { aData, bData, xAxis } = data || {}
  Taro.startPullDownRefresh()
  const formatRate = (val) => {
    return val.toFixed(0) + '%'
  }
  return (
    <View className={style.box}>
      {xAxis.map((item, index) => {
        return (
          <View key={item} className={style.item}>
            <View className={style.outCol}>
              <View className={style.col}>
                <View
                  className={style.bar}
                  style={{
                    background: mainColor.blue,
                    height: Taro.pxTransform((200 * (aData[index] || 1)) / 100)
                  }}
                >
                  <Text className={style.rate}>{formatRate(aData[index])}</Text>
                </View>
              </View>
              <View className={style.col}>
                <View
                  className={style.bar}
                  style={{
                    background: mainColor.red,
                    height: Taro.pxTransform((200 * (bData[index] || 1)) / 100)
                  }}
                >
                  <Text className={style.rate}>{formatRate(bData[index])}</Text>
                </View>
              </View>
              <Text className={style.itemName}>{xAxis[index]}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default KdaLine
