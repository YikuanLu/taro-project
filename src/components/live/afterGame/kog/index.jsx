import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import RoundTabs from '@/components/live/afterGame/modules/roundTabs'
import TeamInfo from '@/components/live/afterGame/modules/teamStatus/teamInfo'
import TeamScore from '@/components/live/afterGame/modules/teamStatus/teamScore'
import TeamMoney from '@/components/live/afterGame/modules/teamStatus/teamMoney'
import TeamAllNum from '@/components/live/afterGame/modules/teamStatus/teamAllNum'
import BanPick from '@/components/live/afterGame/modules/banPick'
import style from './Style.module.scss'

const KogAfterGame = ({ gameType, matchId, baseInfo = {} }) => {
  const [afterData, setAfterData] = useState(null)
  const [teamData, setTeamData] = useState({})

  const battleList = baseInfo.battle_list || []
  const battleIds = []
  battleList.map((item, index) => {
    const json = {
      id: index,
      name: `第${index + 1}局`
    }
    battleIds.push(json)
  })

  const getLiveData = () => {
    // 获取赛后数据
    gameMatchs[gameType].liveBattle({ matchId }).then((res) => {
      setAfterData(res)
    })
  }

  useEffect(() => {
    getLiveData()
  }, [])

  useEffect(() => {
    if (!afterData || !afterData.length) return
    const len = afterData.length
    const { team_stats_a: blueSide, team_stats_b: redSide } = afterData[len - 1]
    setTeamData({
      duration: afterData.duration,
      blue: blueSide,
      red: redSide
    })
  }, [afterData])

  //切换局数
  const switchRound = (val) => {
    const curData = afterData.filter((item) => +item.index === val)
    const { team_stats_a: blueSide, team_stats_b: redSide } = curData[0]
    setTeamData({
      duration: curData.duration,
      blue: blueSide,
      red: redSide
    })
  }

  return (
    <View className={style.box}>
      <RoundTabs data={battleIds} onClick={switchRound} />
      <View className={style.infos}>
        <View className={style.row1}>
          <TeamInfo data={teamData.blue} />
          <TeamScore data={teamData} />
          <TeamInfo data={teamData.red} role="red" />
        </View>
        <View className={style.row1}>
          <TeamMoney data={teamData.blue} />
          <TeamMoney data={teamData.red} role="red" />
        </View>
        <View className={style.row2}>
          <TeamAllNum data={teamData.blue} gameType="lol" />
          <TeamAllNum data={teamData.red} gameType="lol" />
        </View>
        <BanPick data={teamData} />
      </View>
    </View>
  )
}

export default KogAfterGame
