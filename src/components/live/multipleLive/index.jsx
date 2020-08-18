import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import LolAfterGame from '@/components/live/afterGame/lol'
import DotaAfterGame from '@/components/live/afterGame/dota'
import KogAfterGame from '@/components/live/afterGame/kog'
import CsgoAfterGame from '@/components/live/afterGame/csgo'
import OwProspect from '@/components/live/prospect/ow'

const MultipleLive = ({ matchParams, baseInfo }) => {
  console.log(baseInfo)
  const { gameType, matchId } = matchParams || {}
  const [prospectData, setProspectData] = useState(null)

  useEffect(() => {
    if (gameType === 'ow') {
      // 获取赛前分析
      gameMatchs[gameType].proSpect({ matchId }).then((res) => {
        setProspectData(res)
      })
    }
  }, [])

  return (
    <View>
      {gameType === 'lol' && (
        <LolAfterGame gameType={gameType} baseInfo={baseInfo} />
      )}
      {gameType === 'dota' && (
        <DotaAfterGame gameType={gameType} baseInfo={baseInfo} />
      )}
      {gameType === 'kog' && (
        <KogAfterGame
          gameType={gameType}
          baseInfo={baseInfo}
          matchId={matchId}
        />
      )}
      {gameType === 'csgo' && (
        <CsgoAfterGame
          gameType={gameType}
          baseInfo={baseInfo}
          matchId={matchId}
        />
      )}
      {gameType === 'ow' && <OwProspect data={prospectData} />}
    </View>
  )
}

export default MultipleLive
