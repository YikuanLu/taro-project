import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { pageSize } from '@/assets/js/types'
import { getUserRecord } from '@/api/user'

import ListItem from '@/components/userScan/item'
import ListView from '@/components/common/myListView'

const initParams = {
  pageNum: 1,
  pageSize
}

const UserScanList = () => {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [artParams, setArtParams] = useState(initParams)

  const [listData, setListData] = useState([])

  const getData = (params) => {
    if (params.pageNum === 1) {
      setLoading(true)
    }
    getUserRecord(params).then((res) => {
      setLoading(false)
      const { rows } = res
      if (res.pageNum >= res.pageTotal) {
        setHasMore(false)
      } else {
        setHasMore(true)
      }
      if (rows.length === 0) {
        setIsEmpty(true)
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

  return (
    <View className="listContentBox">
      <ListView
        loading={loading}
        hasMore={hasMore}
        isEmpty={isEmpty}
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
        {listData.map((item) => {
          return (
            <View key={item.commonId}>
              <ListItem data={item} />
            </View>
          )
        })}
      </ListView>
    </View>
  )
}

export default UserScanList
