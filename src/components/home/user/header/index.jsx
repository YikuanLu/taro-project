import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import MyBadge from '@/components/common/myBadge'
import PropTypes from 'prop-types'

import style from './Header.module.scss'

const Header = ({ msgTotle }) => {
  return (
    <View className={style.header}>
      <View className={style.content}>
        <View
          onClick={() => {
            console.log(1)
          }}
        >
          <MyBadge
            isActive={false}
            icon={{ type: 'qiandao', color: '#fff', size: 38 }}
            label="签到领牛币"
          />
        </View>

        <View className={style.rightBtnGroup}>
          <View
            className={style.firstBtn}
            onClick={() => {
              console.log('xinxi')
            }}
          >
            <MyBadge
              isActive={msgTotle > 0}
              icon={{ type: 'xinxi', color: '#fff', size: 38 }}
            />
          </View>
          <View
            onClick={() => {
              console.log('shezhi')
            }}
          >
            <MyBadge
              isActive={false}
              icon={{ type: 'shezhi', color: '#fff', size: 38 }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

Header.propTypes = {
  msgTotle: PropTypes.number
}

Header.defaultProps = {
  msgTotle: 0
}

export default Header
