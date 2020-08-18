import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { getArticleComment } from '@/api/info'
import CommentItem from '@/components/live/comment/item'
import style from './Style.module.scss'

const LiveComment = ({ matchParams }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const params = {
      ...matchParams,
      articleType: 'match'
    }
    getArticleComment(params).then(({ rows }) => {
      setComments(rows)
    })
  }, [])

  return (
    comments.length > 0 && (
      <View className={style.box}>
        <View className={style.title}>最新评论</View>
        {comments.map((item) => {
          return <CommentItem data={item} key={item.id} />
        })}
      </View>
    )
  )
}

export default LiveComment
