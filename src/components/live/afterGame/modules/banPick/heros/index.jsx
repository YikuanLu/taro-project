import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import classNames from 'classnames'
import style from './Style.module.scss'

const TeamStatus = ({ data = {}, type = 'pick', align = 'right' }) => {
  return (
    <View
      className={classNames(style.box, {
        [style.ban]: type === 'ban',
        [style.left]: align === 'left'
      })}
    >
      {data.map((item) => {
        return (
          <Image
            key={item.name}
            className={style.img}
            src={item.avatar || item.logo}
          />
        )
      })}
    </View>
  )
}

export default TeamStatus
