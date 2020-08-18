import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import LolProspect from '@/components/live/prospect/lol'
import DotaProspect from '@/components/live/prospect/dota'
import KogProspect from '@/components/live/prospect/kog'
import CsgoProspect from '@/components/live/prospect/csgo'
import OwProspect from '@/components/live/prospect/ow'

const Prospect = ({ matchParams }) => {
  const { gameType, matchId } = matchParams || {}
  const [prospectData, setProspectData] = useState(null)

  useEffect(() => {
    // 获取赛前分析
    gameMatchs[gameType].proSpect({ matchId }).then((res) => {
      setProspectData(res)
    })
  }, [])

  return (
    <View>
      {gameType === 'lol' && <LolProspect data={prospectData} />}
      {gameType === 'dota' && <DotaProspect data={prospectData} />}
      {gameType === 'kog' && <KogProspect data={prospectData} />}
      {gameType === 'csgo' && <CsgoProspect data={prospectData} />}
      {gameType === 'ow' && <OwProspect data={prospectData} />}
    </View>
  )
}

export default Prospect
