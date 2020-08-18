import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'

import style from './Style.module.scss'

const CsgoMap = ({ data = {} }) => {
  if (!data.blue || !data.red) return
  const { blue, red, type } = data
  return (
    <View className={style.box}>
      <View className={style.table}>
        <View className={style.thead}>
          <Text className={style.text}>战队</Text>
          <Text className={style.text}>上半场</Text>
          <Text className={style.text}>下半场</Text>
          <Text className={style.text}>加时赛</Text>
          {type === 2 && (
            <Block>
              <Text className={style.text}>击杀</Text>
              <Text className={style.text}>死亡</Text>
              <Text className={style.text}>助攻数</Text>
              <Text className={style.text}>残局获胜</Text>
              <Text className={style.text}>评分</Text>
            </Block>
          )}
        </View>
        {[blue, red].map((item) => {
          // 计算是否有加时赛。 大于30回合的，用总得分-15，就是加时回合数
          const calcOT = (val) => {
            if (data.currentRound > 30) {
              return val - 15
            } else {
              return '-'
            }
          }
          return (
            <View key={item.name} className={style.tbody}>
              <View className={style.logo}>
                <Image mode="aspectFit" className={style.img} src={item.logo} />
              </View>
              <Text className={style.text}>
                {item.firstHalfScore}
                {item.firstHalfType}
              </Text>
              <Text className={style.text}>
                {item.secondHalfScore}
                {item.secondHalfType}
              </Text>
              <Text className={style.text}>{calcOT(item.totalScore)}</Text>
              {type === 2 && (
                <Block>
                  <Text className={style.text}>{item.killCount}</Text>
                  <Text className={style.text}>{item.deathCount}</Text>
                  <Text className={style.text}>{item.assistCount}</Text>
                  <Text className={style.text}>{item.clutchesWinCount}</Text>
                  <Text className={style.text}>{item.rating}</Text>
                </Block>
              )}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default CsgoMap
