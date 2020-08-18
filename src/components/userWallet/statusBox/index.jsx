import Taro from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'

import PropTypes from 'prop-types'

import IconFont from '@/icon'

import style from './StatusBox.module.scss'

const StatusBox = ({ statusData, checkDate, dateChange }) => {
  return (
    <View className={style.statusBox}>
      <View className={style.flexBox}>
        <Picker
          value={checkDate}
          fields="month"
          mode="date"
          onChange={dateChange}
        >
          <View className={style.picker}>
            <View className={style.iconfont}>
              <IconFont name="rili" color="#9EA7B4" size={26} />
            </View>
            <View className={style.time}>{checkDate}</View>
          </View>
        </Picker>
        <View className={style.income}>收入 {statusData.incomeTotal}</View>
      </View>
      <View className={style.income}>支出 {Math.abs(statusData.payTotal)}</View>
    </View>
  )
}

StatusBox.propTypes = {
  checkDate: PropTypes.string
}

StatusBox.defaultProps = {
  checkDate: '2020-1'
}

export default StatusBox
