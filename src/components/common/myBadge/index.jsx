import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import IconFont from '@/icon'

import style from './Style.module.scss'

const MyBadge = ({ icon, label, isActive }) => {
  return (
    <View className={style.iconBtn}>
      <View className={style.icon}>
        <IconFont name={icon.type} color={icon.color} size={icon.size} />
        {isActive ? <Text className={style.badge}></Text> : null}
      </View>
      {label ? <Text className={style.btnText}>{label}</Text> : null}
    </View>
  )
}

MyBadge.propTypes = {
  icon: PropTypes.object, // 图标类型
  label: PropTypes.string, // 显示文字，默认 空字符
  isActive: PropTypes.bool //是否为激活状态(小圆点)
}

MyBadge.defaultProps = {
  icon: {
    type: 'qiandao',
    color: '#fff',
    size: 38
  },
  label: '',
  isActive: false
}

export default MyBadge
