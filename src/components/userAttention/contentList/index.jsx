import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ListView from '@/components/common/myListView'
import PropTypes from 'prop-types'

import { getUserMatchList, getUserFavoriteArtList } from '@/api/user'

import { pageSize } from '@/assets/js/types'

import ArtFavItem from '@/components/userAttention/artFavItem'
import LeagueItem from '@/components/userAttention/leagueItem'

import style from './ContentList.module.scss'

const initParams = {
  pageNum: 1,
  pageSize,
  total: 0,
  pageTotal: 0
}

const ContentList = ({ currentIndex }) => {
  const [artParams, setArtParams] = useState(initParams)
  const [hasMore, setHasMore] = useState(true)
  const [listData, setListData] = useState([])
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const resetStatus = () => {
    return Promise.all([setArtParams(initParams), setHasMore(true)])
  }

  const initList = (params) => {
    setLoading(true)
    if (currentIndex === 0) {
      return getUserMatchList()
    }
    return getUserFavoriteArtList(params)
  }

  useEffect(() => {
    initList(initParams)
      .then((res) => {
        setLoading(false)
        if (currentIndex === 0) {
          if (res.dayMatches.length === 0) {
            setIsEmpty(true)
          }
          setListData(res.dayMatches)
          return
        }
        if (res.rows.length === 0) {
          setIsEmpty(true)
        }
        setListData(res.rows)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [currentIndex])

  useEffect(() => {
    if (currentIndex === 0 || !hasMore || artParams === initParams) return
    getUserFavoriteArtList(artParams).then((res) => {
      if (res.pageNum >= res.pageTotal) {
        setHasMore(false)
      }
      setListData([...listData, ...res.rows])
    })
  }, [artParams])

  const onScrollBtm = () => {
    if (currentIndex === 0) return
    setArtParams({
      ...artParams,
      pageNum: artParams.pageNum + 1
    })
  }

  // 比赛取消关注后刷新列表
  const updataMatch = () => {
    resetStatus().then(() => {
      initList(initParams).then((res) => {
        setLoading(false)
        if (currentIndex === 0) {
          setListData(res.dayMatches)
          return
        }
        setListData(res.rows)
      })
    })
  }

  return (
    <ListView
      className={style.contentList}
      hasMore={hasMore}
      onPullDownRefresh={updataMatch}
      loading={loading}
      isEmpty={isEmpty}
      onScrollToLower={() => {
        onScrollBtm(artParams)
      }}
    >
      {listData.map((item) => {
        return (
          <View key={item.matchDate || item.id}>
            {currentIndex === 0 ? (
              <LeagueItem
                triggerUpdata={() => {
                  initList(initParams).then((res) => {
                    setLoading(false)
                    setListData(res.dayMatches)
                  })
                }}
                data={item}
              />
            ) : (
              <ArtFavItem
                triggerUpdata={() => {
                  initList(initParams).then((res) => {
                    setLoading(false)
                    setListData(res.rows)
                  })
                }}
                data={item}
              />
            )}
          </View>
        )
      })}
    </ListView>
  )
}

ContentList.propTypes = {
  currentIndex: PropTypes.number
}

ContentList.defaultProps = {
  currentIndex: 0
}

export default ContentList
