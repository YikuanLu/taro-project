import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import IconFont from '@/icon'
import classNames from 'classnames'

import './index.scss'

export default class NavBar extends Taro.Component {
  // 默认参数配置
  static defaultProps = {
    title: '尚牛电竞', // 展示标题
    fixed: true, // 是否固定
    transparent: false, //是否是透明背景，默认 false
    backUrl: '', //左边返回键的返回地址，默认返回上一级
    noBack: false, //是否显示左边返回键，默认展示返回键
    rightConfig: {
      firstType: false, //右边第一个展示的类型， 默认不展示，可选值【icon, text】
      firstVal: '', //右边第一个展示的类型值， 默认''
      secondType: false, //右边第二个展示的类型， 默认不展示，可选值【icon, text】
      secondVal: '', //右边第二个展示的类型值， 默认''
      firstClick: () => {}, //右边第一个点击事件
      secondClick: () => {} //右边第二个点击事件
    }
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      title,
      transparent,
      rightConfig: {
        firstType,
        firstVal,
        secondType,
        secondVal,
        firstClick,
        secondClick
      },
      backUrl,
      noBack,
      fixed
    } = this.props

    // 返回事件
    const back = () => {
      if (noBack) return
      backUrl ? Taro.navigateTo({ url: backUrl }) : Taro.navigateBack()
    }

    return (
      <View>
        <View className={classNames('taro-navbar', { fixed }, { transparent })}>
          <View className="left-part">
            <View onClick={() => back()}>
              {!noBack && (
                <IconFont name="jinru-copy" color={['#fff']} size={50} />
              )}
            </View>
          </View>
          <Text className="taro-navbar-title">{title}</Text>
          <View className="right-part">
            <View
              className={classNames('taro-navbar-box', { hidden: !firstType })}
              onClick={() => firstClick()}
            >
              {firstType === 'icon' && (
                <IconFont
                  className="right-icon"
                  name={firstVal}
                  color={['#fff', '#fff']}
                  size={40}
                />
              )}
              {firstType === 'text' && (
                <Text className="right-icon">{firstVal}</Text>
              )}
            </View>
            <View
              className={classNames('taro-navbar-box', { hidden: !secondType })}
              onClick={() => secondClick()}
            >
              {secondType === 'icon' && (
                <IconFont
                  className="right-icon"
                  name={secondVal}
                  color={['#fff', '#fff']}
                  size={40}
                />
              )}
              {secondType === 'text' && (
                <Text className="right-icon">{secondVal}</Text>
              )}
            </View>
          </View>
        </View>
        <View className={classNames({ placeBlock: !transparent })}></View>
      </View>
    )
  }
}
