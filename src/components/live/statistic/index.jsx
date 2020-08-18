import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import StaticTab from '@/components/live/statistic/staticTab'
import TableList from '@/components/live/statistic/tableList'

const Statistic = ({ matchParams, baseInfo }) => {
  const { gameType, matchId } = matchParams || {}
  const [staticData, setStaticData] = useState(null) // 总的数据
  const [platforms, setPlatforms] = useState(null) // 平台列表
  const [platformData, setPlatformData] = useState(null) // 平台对应的数据

  // 获取平台列表
  const getPlatforms = (data) => {
    const platArr = []
    // 根据数据获取全网指数的平台列表
    data.map((item) => {
      !platArr.includes(item.source) && platArr.push(item.source)
    })
    return platArr
  }

  // 筛选平台对应的数据
  const filterPlatData = (val) => {
    const platData = staticData.filter((item) => item.source === val)
    setPlatformData(platData)
  }

  useEffect(() => {
    // 获取全网指数
    gameMatchs[gameType].betInfoList({ matchId }).then((res) => {
      setStaticData(res)
    })
  }, [])

  useEffect(() => {
    if (!staticData) return
    // 筛选出对应的数据
    const plats = getPlatforms(staticData)
    setPlatforms(plats)
    filterPlatData(plats[0])
  }, [staticData])

  const switchTab = (val) => {
    filterPlatData(val)
  }

  return (
    <View>
      {platforms && (
        <View>
          <StaticTab data={platforms} onClick={switchTab} />
          <TableList data={platformData} baseInfo={baseInfo} />
        </View>
      )}
    </View>
  )
}

export default Statistic
