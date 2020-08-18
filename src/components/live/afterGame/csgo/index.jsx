import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import RoundTabs from '@/components/live/afterGame/modules/roundTabs'
import TeamInfo from '@/components/live/afterGame/modules/teamStatus/teamInfo'
import TeamIcons from '@/components/live/afterGame/modules/teamStatus/teamIcons'
import CsgoMap from '@/components/live/afterGame/modules/csgoMap'
import CsgoTable from '@/components/live/afterGame/modules/csgoTable'
import style from './Style.module.scss'

const CsgoAfterGame = ({ gameType, matchId, baseInfo = {} }) => {
  const [afterData, setAfterData] = useState(null)
  const [teamData, setTeamData] = useState({})

  const battleList = baseInfo.battle_list || []
  const len = baseInfo.battle_list.length
  const curBattleId = len > 0 ? battleList[len - 1].sortNo : null

  const battleIds = []
  battleList.map((item, index) => {
    const json = {
      id: item.sortNo,
      name: `第${index + 1}局`
    }
    battleIds.push(json)
  })

  const getLiveData = (battleId) => {
    // 获取赛后数据
    gameMatchs[gameType]
      .liveBattle({ index: battleId, matchId })
      .then((res) => {
        setAfterData(res)
      })
  }

  useEffect(() => {
    getLiveData(curBattleId)
  }, [])

  useEffect(() => {
    if (!afterData) return
    const { teamARound, teamBRound } = afterData
    const blueSide = {
      // 蓝队
      logo: afterData.teamALogo,
      name: afterData.teamAName,
      ...teamARound
    }
    const redSide = {
      // 红队
      logo: afterData.teamBLogo,
      name: afterData.teamBName,
      ...teamBRound
    }
    setTeamData({
      blue: blueSide,
      red: redSide,
      mapName: afterData.mapName,
      currentRound: afterData.currentRound,
      type: afterData.type // 数据类型，1实时数据， 2赛后数据
    })
  }, [afterData])

  //切换局数
  const switchRound = (val) => getLiveData(val)

  return (
    <View className={style.box}>
      <RoundTabs data={battleIds} onClick={switchRound} />
      <View className={style.infos}>
        <View className={style.row1}>
          <TeamInfo data={teamData.blue} gameType="csgo" />
          <CsgoMap data={teamData} />
          <TeamInfo data={teamData.red} gameType="csgo" role="red" />
        </View>
        <View className={style.row1}>
          <TeamIcons data={teamData.blue} />
          <TeamIcons data={teamData.red} />
        </View>
        <CsgoTable data={teamData} />
      </View>
    </View>
  )
}

export default CsgoAfterGame
