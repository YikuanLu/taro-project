import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import RoundTabs from '@/components/live/afterGame/modules/roundTabs'
import TeamInfo from '@/components/live/afterGame/modules/teamStatus/teamInfo'
import TeamScore from '@/components/live/afterGame/modules/teamStatus/teamScore'
import TeamMoney from '@/components/live/afterGame/modules/teamStatus/teamMoney'
import TeamAllNum from '@/components/live/afterGame/modules/teamStatus/teamAllNum'
import TeamIcons from '@/components/live/afterGame/modules/teamStatus/teamIcons'
import BanPick from '@/components/live/afterGame/modules/banPick'
import style from './Style.module.scss'

const LolAfterGame = ({ gameType, baseInfo = {} }) => {
  const [afterData, setAfterData] = useState(null)
  const [teamData, setTeamData] = useState({})

  const battleList = baseInfo.battle_list || []
  const len = baseInfo.battle_list.length
  const curBattleId = len > 0 ? battleList[len - 1].battle_id : null

  const battleIds = []
  battleList.map((item, index) => {
    const json = {
      id: item.battle_id,
      name: `第${index + 1}局`
    }
    battleIds.push(json)
  })

  const getLiveData = (battleId) => {
    // 获取赛后数据
    gameMatchs[gameType].liveBattle({ battleId }).then((res) => {
      setAfterData(res)
    })
  }

  useEffect(() => {
    getLiveData(curBattleId)
  }, [])

  useEffect(() => {
    if (!afterData) return
    const teamStats = afterData.team_stats
    const blueSide = teamStats.filter((_) => _.side === 'blue')[0] // 蓝队
    const redSide = teamStats.filter((_) => _.side === 'red')[0] // 红队
    setTeamData({
      duration: afterData.duration,
      blue: blueSide,
      red: redSide
    })
  }, [afterData])

  //切换局数
  const switchRound = (val) => getLiveData(val)

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
        <View className={style.row1}>
          <TeamIcons data={teamData.blue} />
          <TeamIcons data={teamData.red} />
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

export default LolAfterGame
