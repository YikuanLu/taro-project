import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSwipeAction } from 'taro-ui'

import { getUserAllComment, removeUserCommentById } from '@/api/user'
import { pageSize } from '@/assets/js/types'

import ListView from '@/components/common/myListView'
import CommentItem from '@/components/userComment/commentItem'

import NavBar from '@/components/common/navBar'

const initParams = {
  pageNum: 1,
  pageSize,
  total: 0,
  pageTotal: 0
}

const UserComment = () => {
  const [artParams, setArtParams] = useState(initParams)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [listData, setListData] = useState([])

  const getData = (params) => {
    setLoading(true)
    getUserAllComment(params).then((res) => {
      setLoading(false)
      const { rows } = res
      if (res.pageNum >= res.pageTotal) {
        setHasMore(false)
      }
      if (res.pageNum === 1) {
        setListData(rows)
      } else {
        setListData([...listData, ...rows])
      }
    })
  }

  useEffect(() => {
    getData(artParams)
  }, [artParams])

  const handleSingle = (index) => {
    const curList = listData.map((item, i) => {
      if (i === index) {
        item.isOpened = true
      } else {
        item.isOpened = false
      }
      return item
    })
    setListData(curList)
  }
  return (
    <View className="listContentBox">
      <NavBar title="我的评论" />
      <ListView
        hasMore={hasMore}
        loading={loading}
        onPullDownRefresh={() => {
          setArtParams(initParams)
          getData(initParams)
        }}
        onScrollToLower={() => {
          setArtParams({
            ...artParams,
            pageNum: artParams.pageNum + 1
          })
        }}
      >
        {listData.map((item, index) => (
          <AtSwipeAction
            key={item.id}
            autoClose
            onOpened={() => {
              handleSingle(index)
            }}
            onClick={(ele) => {
              const { data } = ele
              removeUserCommentById({ id: data.id }).then(() => {
                Taro.showToast({
                  title: '删除成功',
                  icon: 'none',
                  duration: 2000
                })
                setArtParams(initParams)
                if (artParams === initParams) {
                  getData(initParams)
                }
              })
            }}
            isOpened={item.isOpened}
            options={[
              {
                text: '删除',
                data: item,
                style: {
                  backgroundColor: '#F04844'
                }
              }
            ]}
          >
            <CommentItem data={item} />
          </AtSwipeAction>
        ))}
      </ListView>
    </View>
  )
}

export default UserComment
