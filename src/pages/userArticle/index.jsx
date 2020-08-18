import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { getMyArtList } from '@/api/user'

import ListView from '@/components/common/myListView'
import MyTabs from '@/components/common/myTabs'
import ArtItem from '@/components/common/article/listItem'

import { pageSize } from '@/assets/js/types'

import NavBar from '@/components/common/navBar'

import style from './UserArticle.module.scss'

const tabsList = [
  {
    name: '全部',
    key: 'all'
  },
  {
    name: '视频',
    key: 'video'
  },
  {
    name: '文章',
    key: 'article'
  },
  {
    name: '图集',
    key: 'picture'
  }
]

const initParams = {
  pageNum: 1,
  pageSize,
  total: 0,
  pageTotal: 0,
  type: undefined
}

const UserArticle = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const changeIndex = (val) => {
    setCurrentIndex(val)
  }

  const [artParams, setArtParams] = useState(initParams)
  const [hasMore, setHasMore] = useState(true)
  const [listData, setListData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = (params) => {
    setLoading(true)
    getMyArtList(params).then((res) => {
      const { rows } = res
      if (res.pageNum >= res.pageTotal) {
        setHasMore(false)
      }
      if (res.pageNum === 1) {
        setListData(rows)
      } else {
        setListData([...listData, ...rows])
      }
      setListData(rows)
      setLoading(false)
    })
  }

  const paramsPre = useRef(null)

  useEffect(() => {
    if (paramsPre.current) {
      setArtParams({
        ...initParams,
        type:
          tabsList[currentIndex].key !== 'all'
            ? tabsList[currentIndex].key
            : undefined
      })
    }
    paramsPre.current = artParams
  }, [currentIndex])

  useEffect(() => {
    getData(artParams)
  }, [artParams])

  return (
    <View className={style.userArticle}>
      <NavBar title="我的作品" />
      <MyTabs
        tabsList={tabsList}
        currentIndex={currentIndex}
        onChange={changeIndex}
      />
      <ListView
        className={style.contentList}
        hasMore={hasMore}
        loading={loading}
        onPullDownRefresh={() => {
          getData(artParams)
        }}
        onScrollToLower={() => {
          setArtParams({
            ...artParams,
            pageNum: artParams.pageNum + 1
          })
        }}
      >
        {listData.map((item) => {
          return <ArtItem key={item.id} type={item.type} data={item} />
        })}
      </ListView>
    </View>
  )
}

export default UserArticle
