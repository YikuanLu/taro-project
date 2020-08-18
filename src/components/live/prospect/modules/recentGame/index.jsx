import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import { mainColor } from '@/assets/js/types'
import style from './Style.module.scss'

const RecentGame = ({ data, role = 'blue' }) => {
  return (
    <View className={style.box}>
      <View className={style.thead} style={{ background: mainColor[role] }}>
        <Text>对手</Text>
        <Text>结果</Text>
        <Text>比分</Text>
      </View>
      {data.map((item) => {
        return (
          <View key={item.matchTime} className={style.row}>
            <View className={style.text}>
              <Image className={style.logo} src={item.teamLogo}></Image>
              <Text className={style.name}>{item.teamName}</Text>
            </View>
            <Text className={style.text}>{item.result ? '负' : '胜'}</Text>
            <Text className={style.text}>{item.score}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default RecentGame
