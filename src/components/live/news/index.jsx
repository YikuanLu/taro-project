import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import ArtItem from '@/components/common/article/listItem'
import { getArticleList } from '@/api/info'
import style from './Style.module.scss'

const LiveNews = ({ matchParams }) => {
  const { gameType = 'lol', matchId } = matchParams || {}

  const [infoList, setInfoList] = useState(null)
  useEffect(() => {
    getArticleList({ gameType, matchId }).then((res) => {
      res.total && setInfoList(res.rows)
    })
  }, [])

  if (!infoList) return
  return (
    <View className={style.box}>
      {infoList.map((item) => {
        return <ArtItem key={item.id} type={item.type} data={item} />
      })}
    </View>
  )
}

export default LiveNews
