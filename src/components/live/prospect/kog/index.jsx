import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import WinRateCircle from '@/components/live/prospect/modules/winRateCircle'
import KdaLine from '@/components/live/prospect/modules/kdaLine'
import VerticalLine from '@/components/live/prospect/modules/verticalLine'

import style from './Style.module.scss'

const KogProspect = ({ data }) => {
  if (!data) return
  const { recentlyTeamData } = data
  if (!recentlyTeamData) return
  //外层统一数据字段！！！

  const teamA = recentlyTeamData[0]
  const teamB = recentlyTeamData[1]

  // 计算胜率
  function calcWinRate(team) {
    const rate = ((team.winCount / team.playCount) * 100).toFixed(0)
    return rate
  }
  // 胜率的数据
  const pieData = {
    blue: {
      winTimes: teamA.winCount,
      loseTimes: teamA.lostCount,
      winRate: calcWinRate(teamA)
    },
    red: {
      winTimes: teamB.winCount,
      loseTimes: teamB.winCount,
      winRate: calcWinRate(teamB)
    }
  }

  // 构造数据
  const centerLineInfo = {
    blue: {
      kda: teamA.kda,
      k: teamA.killAverage,
      d: teamA.deathAverage,
      a: teamA.assistAverage
    },
    red: {
      kda: teamB.kda,
      k: teamB.killAverage,
      d: teamB.deathAverage,
      a: teamB.assistAverage
    }
  }

  // 计算均场时长(小程序会报错，不能封装方法)
  const teamATime = teamA.timeAverage
  const teamBTime = teamB.timeAverage
  const aDataCalc = `${Math.floor(teamATime / 60)}'${teamATime % 60}''`
  const bDataCalc = `${Math.floor(teamBTime / 60)}'${teamBTime % 60}''`
  // 构造数据
  const centerLineData = [
    {
      title: '场均经济',
      aData: teamA.economicAverage,
      bData: teamB.economicAverage
    },
    {
      title: '场均输出',
      aData: teamA.damageAverage,
      bData: teamB.damageAverage
    },
    {
      title: '场均大龙',
      aData: teamA.bigDragonAverage,
      bData: teamB.bigDragonAverage
    },
    {
      title: '均场时长',
      aData: teamA.timeAverage,
      bData: teamB.timeAverage,
      aDataCalc,
      bDataCalc
    }
  ]

  // 构造数据
  const verticalData = {
    aData: [teamA.firstBloodRate, teamA.smallDragonRate, teamA.bigDragonRate],
    bData: [teamB.firstBloodRate, teamB.smallDragonRate, teamB.bigDragonRate],
    xAxis: ['一血率', '小龙控制率', '大龙控制率']
  }
  return (
    <View className={style.box}>
      <View className={style.title}>近期战队对战数据</View>
      <View className={style.pieCharts}>
        <WinRateCircle data={pieData.blue} />
        <WinRateCircle data={pieData.red} role="red" />
      </View>
      <KdaLine data={centerLineInfo} lineData={centerLineData} />
      <VerticalLine data={verticalData} />
    </View>
  )
}

export default KogProspect
