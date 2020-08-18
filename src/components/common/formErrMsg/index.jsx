import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@/icon'
import PropTypes from 'prop-types'
import style from './Style.module.scss'

const FormErrMsg = ({ isShow, msg, isPadding }) => {
  return (
    isShow && (
      <View
        className={style.errMsg}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: !isPadding ? '0' : null
        }}
      >
        <IconFont name="cuo" color="#EE4343" size={30} />
        <Text className={style.msg}>{msg}</Text>
      </View>
    )
  )
}

FormErrMsg.propTypes = {
  isShow: PropTypes.bool,
  isPadding: PropTypes.bool,
  msg: PropTypes.string
}

FormErrMsg.defaultProps = {
  isShow: false,
  msg: '请填写正确信息',
  isPadding: true
}

export default FormErrMsg
