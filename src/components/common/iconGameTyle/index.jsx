import { GAME_TYPES } from '@/assets/js/types'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import IconFont from '@/icon'

const IconGameType = ({ gameType, size }) => {
  return (
    gameType && (
      <View style={{ display: 'inline-block' }}>
        <IconFont
          name={GAME_TYPES[gameType].icon}
          color={[GAME_TYPES[gameType].color, GAME_TYPES[gameType].color]}
          size={size}
        />
      </View>
    )
  )
}

IconGameType.propTypes = {
  gameType: PropTypes.string.isRequired,
  size: PropTypes.number
}

IconGameType.defaultProps = {
  size: 24
}

export default IconGameType
