import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import IconFont from '@/icon'
import style from './Style.module.scss'

const MyCheckBox = ({ isChecked, children, handleClick }) => {
  return (
    <View className={style.checkBoxContent} onClick={handleClick}>
      {isChecked ? (
        <View className={style.checked}>
          <IconFont name="gou" color="#fff" size={30} />
        </View>
      ) : (
        <Text className={style.unCheck} />
      )}
      {children}
    </View>
  )
}

MyCheckBox.propTypes = {
  isChecked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}

MyCheckBox.defaultProps = {
  isChecked: false
}

export default MyCheckBox
