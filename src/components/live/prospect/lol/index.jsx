import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import WinRateCircle from '@/components/live/prospect/modules/winRateCircle'
import KdaLine from '@/components/live/prospect/modules/kdaLine'
import VerticalLine from '@/components/live/prospect/modules/verticalLine'

import style from './Style.module.scss'

const LolProspect = ({ data }) => {
  if (!data) return
  const { strength_index } = data
  if (!strength_index) return
  //外层统一数据字段！！！

  // 胜率的数据
  const pieData = {
    blue: {
      winTimes: strength_index.record_win_team_a,
      loseTimes: strength_index.record_lose_team_a,
      winRate: strength_index.victory_rate_a
    },
    red: {
      winTimes: strength_index.record_win_team_b,
      loseTimes: strength_index.record_lose_team_b,
      winRate: strength_index.victory_rate_b
    }
  }

  // 构造数据
  const centerLineInfo = {
    blue: {
      kda: strength_index.average_kda_team_a,
      k: strength_index.average_kills_team_a,
      d: strength_index.average_deaths_team_a,
      a: strength_index.average_assists_team_a
    },
    red: {
      kda: strength_index.average_kda_team_a,
      k: strength_index.average_kills_team_a,
      d: strength_index.average_deaths_team_a,
      a: strength_index.average_assists_team_a
    }
  }

  // 计算均场时长(小程序会报错，不能封装方法)
  const teamATime = strength_index.average_time_a
  const teamBTime = strength_index.average_time_b
  const aDataCalc = `${Math.floor(teamATime / 60)}'${teamATime % 60}''`
  const bDataCalc = `${Math.floor(teamBTime / 60)}'${teamBTime % 60}''`
  // 构造数据
  const centerLineData = [
    {
      title: '分均补刀',
      aData: strength_index.minute_hits_team_a,
      bData: strength_index.minute_hits_team_b
    },
    {
      title: '分均经济',
      aData: strength_index.minute_money_team_a,
      bData: strength_index.minute_money_team_b
    },
    {
      title: '分均输出',
      aData: strength_index.minute_damage_team_a,
      bData: strength_index.minute_damage_team_b
    },
    {
      title: '均场时长',
      aData: strength_index.average_time_a,
      bData: strength_index.average_time_b,
      aDataCalc,
      bDataCalc
    }
  ]

  // 构造数据
  const verticalData = {
    aData: [
      strength_index.first_blood_kill_team_a,
      strength_index.rate_dragon_team_a,
      strength_index.rate_baron_team_a,
      strength_index.first_tower_kill_team_a,
      strength_index.rate_full_bureau_team_a
    ],
    bData: [
      strength_index.first_blood_kill_team_b,
      strength_index.rate_dragon_team_b,
      strength_index.rate_baron_team_b,
      strength_index.first_tower_kill_team_b,
      strength_index.rate_full_bureau_team_b
    ],
    xAxis: ['一血率', '小龙控制率', '大龙控制率', '一塔率', '满局率']
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

export default LolProspect
