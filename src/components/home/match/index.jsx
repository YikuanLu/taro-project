import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { ScrollView, Block } from '@tarojs/components'
// import classNames from 'classnames'

import TopBar from '@/components/common/topBar'
import Banner from '@/components/common/banner'
import GameTypes from '@/components/common/gameTypes'
import MatchTypes from '@/components/home/match/matchTypes'
import LeagueItem from '@/components/home/match/leagueItem'
import ListView from 'taro-listview'
import { matchList, liveMatchList, notifyMatchList } from '@/api/battle'
import { GAME_TYPES } from '@/assets/js/types'
import style from './Style.module.scss'

const Match = () => {
  const initGameTypes = Object.keys(GAME_TYPES) // 所有的游戏类型

  const gameTypes = Taro.getStorageSync('gameTypes') || initGameTypes // 已选择的游戏类型

  const timerRef = useRef(null)
  const [error, setError] = useState(false) // 是否展示错误页
  const [hasMore, setHasMore] = useState(true) // 是否加载更多
  const [isEmpty, setIsEmpty] = useState(false) // 是否展示空白页
  const [gameParams, setGameParams] = useState({
    // 比赛请求参数
    getType: 1,
    gameTypes: gameTypes.join(',')
  })
  const [matchData, setMatchData] = useState([]) // 比赛数据
  const [showFollow, setShowFollow] = useState(false) // 是否显示关注列表
  const [datePeriod, setDatePeriod] = useState([]) // 当前请求的时间区间
  // const [isFixed, setIsFixed] = useState(false) // 设置是否固定

  // 获取我的关注比赛
  const getFollowData = () => {
    notifyMatchList().then((res) => {
      setMatchData([
        {
          leaueMatches: res
        }
      ])
    })
  }
  // 获取直播中比赛
  const getLiveData = () => {
    liveMatchList(gameParams).then((res) => {
      setMatchData([
        {
          leaueMatches: res
        }
      ])
    })
  }

  // 滚动到顶部
  const scrollToTop = () => {
    // Taro.pageScrollTo({ scrollTop: 0 })
    setMatchData([])
    setHasMore(true)
  }

  // 切换游戏
  const switchGame = (val) => {
    scrollToTop()
    setDatePeriod([])
    // 关注的
    if (val === 'follow') {
      setShowFollow(true)
      getFollowData()
      return
    }
    setShowFollow(false)
    // 全部
    if (val === 'all') {
      setGameParams({
        ...gameParams,
        ...{ gameTypes: gameTypes.join(',') },
        getType: 1,
        time: ''
      })
      return
    }
    setGameParams({
      ...gameParams,
      ...{ gameTypes: val },
      getType: 1,
      time: ''
    })
  }
  // 切换类型
  const switchType = (val) => {
    scrollToTop()
    // 直播单独请求接口
    if (val === 1) {
      setDatePeriod([])
      getLiveData()
      return
    }
    setGameParams({
      ...gameParams,
      ...{ gameStatus: val },
      getType: 1,
      time: ''
    })
  }
  // 重置状态
  const reset = () => {
    setError(false)
    setIsEmpty(false)
    setHasMore(true)
  }

  // 请求比赛数据
  const getData = () => {
    reset()
    matchList(gameParams)
      .then((res) => {
        if (!res.dayMatches || !res.dayMatches.length) {
          setHasMore(false)
        }
        //  1 获取time当天及明天数据， 2 获取time前7天数据 3 获取time后7天数据
        if (gameParams.getType === 1) {
          if (!res.dayMatches || !res.dayMatches.length) {
            setIsEmpty(true)
            return
          }
          setMatchData(res.dayMatches)
          setDatePeriod([res.startDate, res.endDate])
        }
        if (gameParams.getType === 2) {
          setMatchData([...res.dayMatches, ...matchData])
          setDatePeriod([res.startDate, datePeriod[1]])
        }
        if (gameParams.getType === 3) {
          setMatchData([...matchData, ...res.dayMatches])
          setDatePeriod([datePeriod[0], res.endDate])
        }
      })
      .catch(() => {
        setError(true)
      })
  }

  // 滚动到顶部
  const onScrollTop = (rest) => {
    // 关注栏目下，下拉刷新是刷新当前关注列表
    if (showFollow) {
      getFollowData()
      rest()
      return
    }
    setGameParams({
      ...gameParams,
      ...{ getType: 2 },
      time: datePeriod[0]
    })
    rest()
  }
  // 滚动到底部
  const onScrollBtm = (rest) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setGameParams({
        ...gameParams,
        ...{ getType: 3 },
        time: datePeriod[1]
      })
      rest()
    }, 100)
  }

  useEffect(() => {
    getData()
  }, [gameParams])

  // 监听滚动
  // const onScroll = ({ detail }) => {
  //   const sTop = detail.scrollTop
  //   sTop > 50 ? setIsFixed(true) : setIsFixed(false)
  // }

  return (
    <ScrollView
      enable-flex
      scrollY
      // onScroll={(e) => onScroll(e)}
      className={style.container}
    >
      <TopBar title="比赛" />
      <Banner posId="201" />

      <Block>
        <GameTypes onClick={switchGame} />
        {!showFollow && <MatchTypes onClick={switchType} />}
      </Block>

      <ListView
        className={style.scrollMatch}
        isError={error}
        hasMore={hasMore}
        isEmpty={isEmpty}
        needInit
        onPullDownRefresh={(fn) => onScrollTop(fn)}
        onScrollToLower={(fn) => onScrollBtm(fn)}
      >
        {matchData.map((item) => {
          return <LeagueItem key={item.matchDate} data={item} />
        })}
      </ListView>
    </ScrollView>
  )
}

export default Match
