import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import style from './Style.module.scss'

const CsgoMap = ({ data = {} }) => {
  if (!data.blue || !data.red) return
  const { blue, red, currentRound, mapName } = data
  return (
    <View className={style.box}>
      <View className={style.scores}>
        <Text className={style.num}>{blue.totalScore}</Text>
        <View
          className={style.mapInfo}
          style={`background-image: url(https://www.shangniu.cn/img/csgo/${mapName}.png)`}
        >
          <Text className={style.name}>{mapName}</Text>
          <Text className={style.round}>第{currentRound}回合</Text>
        </View>
        <Text className={style.num}>{red.totalScore}</Text>
      </View>
    </View>
  )
}

export default CsgoMap
