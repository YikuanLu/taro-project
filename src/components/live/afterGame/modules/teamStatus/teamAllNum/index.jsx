import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'

import kogBigDragon from '@/assets/img/live/kog-big-dragon.png'
import kogSmallDragon from '@/assets/img/live/kog-small-dragon.png'
import kogTower from '@/assets/img/live/kog-tower.png'
import lolBigDragon from '@/assets/img/live/lol-big-dragon.png'
import lolSmallDragon from '@/assets/img/live/lol-small-dragon.png'
import lolTower from '@/assets/img/live/lol-tower.png'
import style from './Style.module.scss'

const TeamAllNum = ({ data = {}, gameType = 'lol' }) => {
  return (
    <View className={classNames(style.box)}>
      <View className={style.itemBox}>
        <View className={style.item}>
          <Image
            className={style.img}
            src={gameType === 'lol' ? lolBigDragon : kogBigDragon}
          />
          <Text className={style.text}>{data.big_dragon_count}</Text>
          <Text className={style.name}>大龙数</Text>
        </View>
        <View className={style.item}>
          <Image
            className={style.img}
            src={gameType === 'lol' ? lolSmallDragon : kogSmallDragon}
          />
          <Text className={style.text}>{data.small_dragon_count}</Text>
          <Text className={style.name}>小龙数</Text>
        </View>
        <View className={style.item}>
          <Image
            className={style.img}
            src={gameType === 'lol' ? lolTower : kogTower}
          />
          <Text className={style.text}>{data.tower_success_count}</Text>
          <Text className={style.name}>防御塔</Text>
        </View>
      </View>
    </View>
  )
}

export default TeamAllNum
