import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import WinRateCircle from '@/components/live/prospect/modules/winRateCircle'
import KdaLine from '@/components/live/prospect/modules/kdaLine'

import style from './Style.module.scss'

const DotaProspect = ({ data }) => {
  if (!data) return
  const { team_a_match_stat: TeamA, team_b_match_stat: TeamB } = data
  if (!TeamA || !TeamB) return
  //外层统一数据字段！！！

  // 胜率的数据
  const pieData = {
    blue: {
      winRate: TeamA.winRate
    },
    red: {
      winRate: TeamB.winRate
    }
  }

  // 构造数据
  const centerLineInfo = {
    blue: {
      kda: TeamA.kda
    },
    red: {
      kda: TeamB.kda
    }
  }

  // 构造数据
  const centerLineData = [
    {
      title: '每分钟金钱',
      aData: TeamA.goldPerMin,
      bData: TeamB.goldPerMin
    },
    {
      title: '每分钟经验',
      aData: TeamA.xpPerMin,
      bData: TeamB.xpPerMin
    },
    {
      title: '场均真眼',
      aData: TeamA.sentryWard,
      bData: TeamB.sentryWard
    },
    {
      title: '场均假眼',
      aData: TeamA.observerWard,
      bData: TeamB.observerWard
    },
    {
      title: '场均开雾',
      aData: TeamA.smoke,
      bData: TeamB.smoke
    }
  ]

  return (
    <View className={style.box}>
      <View className={style.title}>近期战队对战数据</View>
      <View className={style.pieCharts}>
        <WinRateCircle data={pieData.blue} />
        <WinRateCircle data={pieData.red} role="red" />
      </View>
      <KdaLine data={centerLineInfo} lineData={centerLineData} />
    </View>
  )
}

export default DotaProspect
