import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TabBarIndex from '@/components/common/tabBarIndex'

import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className="index">
        <TabBarIndex />
      </View>
    )
  }
}

export default Index
