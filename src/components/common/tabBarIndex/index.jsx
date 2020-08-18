import Taro, { useState, useReducer, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import TabBar from '@/components/common/tabBar'

import Match from '@/components/home/match'
import Statistic from '@/components/home/statistic'
import Info from '@/components/home/info'
import Task from '@/components/home/task'
import User from '@/components/home/user'

import reducer from '@/utils/reducer'
import MyContext from '@/utils/context'

const TabIndex = () => {
  const initTab = Taro.getStorageSync('tabIndex') || 1
  const [tabIndex, setTabIndex] = useState(1)
  const [state, dispatch] = useReducer(reducer, { tabIndex })

  const switchTab = (item) => {
    // setTabIndex(item.id)
    Taro.setNavigationBarTitle({
      title: item.text
    })
  }

  useEffect(() => {
    setTabIndex(initTab)
  }, [initTab])

  const store = { state, dispatch }
  {
    /* 这里把state和包装过的dispatch绑定到Context上去，便于全局获取使用 */
  }
  return (
    <MyContext.Provider value={store}>
      <View className="index">
        {tabIndex === 1 && <Match />}
        {tabIndex === 2 && <Statistic />}
        {tabIndex === 3 && <Info />}
        {tabIndex === 4 && <Task />}
        {tabIndex === 5 && <User />}
        <TabBar onClick={switchTab} />
      </View>
    </MyContext.Provider>
  )
}

export default TabIndex
