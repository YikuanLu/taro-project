import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import style from './Style.module.scss'

const KdaLine = ({ data, lineData }) => {
  if (!data) return
  // 计算百分比进度
  function calcPercent(aVal, bVal, role) {
    const all = aVal + bVal
    const aPercent = (aVal / all) * 100
    const bPercent = (bVal / all) * 100
    if (role === 'a') {
      // 减 1是因为中间需要有空隙
      return aPercent + '%'
    } else {
      return bPercent + '%'
    }
  }

  return (
    <View className={style.box}>
      <View className={style.kdaInfo}>
        <Text className={style.kda}>{data.blue.kda}</Text>
        {data.blue.k && (
          <Text className={style.kdaDetail}>
            {data.blue.k}/{data.blue.d}/{data.blue.a}
          </Text>
        )}
        <Text className={style.kdaText}>K/D/A</Text>
        {data.red.k && (
          <Text className={classNames(style.kdaDetail, style.red)}>
            {data.red.k}/{data.red.d}/{data.red.a}
          </Text>
        )}
        <Text className={classNames(style.kda, style.red)}>{data.red.kda}</Text>
      </View>
      {lineData.map((item) => {
        return (
          <View key={item.title} className={style.row}>
            <View className={style.title}>{item.title}</View>
            <View className={style.lineBox}>
              <Text className={style.text}>
                {item.aDataCalc ? item.aDataCalc : item.aData.toFixed(2)}
              </Text>
              <View className={style.lines}>
                <View
                  className={style.line}
                  style={{
                    width: calcPercent(item.aData, item.bData, 'a')
                  }}
                ></View>
                <View
                  className={classNames(style.line, style.red)}
                  style={{
                    width: calcPercent(item.aData, item.bData, 'b')
                  }}
                ></View>
              </View>
              <Text className={classNames(style.text, style.red)}>
                {item.bDataCalc ? item.bDataCalc : item.bData.toFixed(2)}
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default KdaLine
