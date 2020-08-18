import Taro, { useState, useEffect, useRef } from '@tarojs/taro'
import { View } from '@tarojs/components'

import moment from '@/utils/moment'

import {
  getAmountLogTotal,
  getCoinLogTotal,
  getAmountLogPage,
  getCoinLogPage
} from '@/api/user'

import { pageSize } from '@/assets/js/types'

import MyTabs from '@/components/common/myTabs'
import StatusBox from '@/components/userWallet/statusBox'
import ListView from '@/components/common/myListView'
import DetailItem from '@/components/userWallet/detailItem'

import style from './Billdetail.module.scss'

const formatTime = (date) => {
  const list = date.split('-')
  let str = ''
  if (list[1].length === 1) {
    str = `0${list[1]}`
  } else {
    str = list[1]
  }
  return `${list[0]}-${str}`
}

const tabsList = [
  {
    name: '牛币明细',
    key: 'coin'
  },
  {
    name: '现金明细',
    key: 'amount'
  }
]

const initParams = {
  pageNum: 1,
  pageSize
}

const getDate = () => {
  const year = moment().get('Y')
  const month = moment().get('M') + 1
  return `${year}-${month}`
}

const Billdetail = () => {
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const [currentIndex, setCurrentIndex] = useState(0)
  const changeIndex = (index) => {
    setCurrentIndex(index)
  }

  const now = getDate()
  const [checkDate, setCheckDate] = useState(now)
  const dateChange = (e) => {
    setCheckDate(e.detail.value)
  }

  const [paramsData, setParamsData] = useState(initParams)
  const [statusData, setStatusData] = useState({})
  const [listData, setListData] = useState([])
  const setAmountData = (params) => {
    getAmountLogTotal(params).then((res) => {
      setStatusData(res)
    })
  }
  const setCoinData = (params) => {
    getCoinLogTotal(params).then((res) => {
      setStatusData(res)
    })
  }

  useEffect(() => {
    const time = formatTime(checkDate)
    const date = moment(time).format('x')
    setParamsData({ ...initParams, date })
    setLoading(true)
    if (currentIndex === 0) {
      setAmountData({ date })
    } else {
      setCoinData({ date })
    }
  }, [checkDate, currentIndex])

  const getamountLogList = (params) => {
    if (currentIndex === 0) {
      getAmountLogPage(params).then((res) => {
        setLoading(false)
        const { rows, pageNum, pageTotal } = res
        if (pageNum >= pageTotal) {
          setHasMore(false)
        } else {
          setHasMore(true)
        }
        if (rows.length === 0) {
          setIsEmpty(true)
        } else {
          setIsEmpty(false)
        }
        if (pageNum === 1) {
          setListData(rows)
          return
        }
        setListData([...listData, ...rows])
      })
    } else {
      getCoinLogPage(params).then((res) => {
        console.log(res)
        setLoading(false)
        const { rows, pageNum, pageTotal } = res
        if (pageNum >= pageTotal) {
          setHasMore(false)
        } else {
          setHasMore(true)
        }
        if (rows.length === 0) {
          setIsEmpty(true)
        } else {
          setIsEmpty(false)
        }
        if (pageNum === 1) {
          setListData(rows)
          return
        }
        console.log()
        setListData([...listData, ...rows])
      })
    }
  }

  const paramsRef = useRef(null)
  useEffect(() => {
    const time = formatTime(checkDate)
    const date = moment(time).format('x')
    const params = { ...paramsData, date }
    if (paramsRef.current) {
      getamountLogList(params)
    }
    paramsRef.current = params
  }, [paramsData])

  return (
    <View className={style.billdetail}>
      <MyTabs
        tabsList={tabsList}
        currentIndex={currentIndex}
        onChange={changeIndex}
      />
      <StatusBox
        statusData={statusData}
        checkDate={checkDate}
        dateChange={dateChange}
      />
      <ListView
        loading={loading}
        hasMore={hasMore}
        isEmpty={isEmpty}
        onPullDownRefresh={() => {
          const time = formatTime(checkDate)
          const date = moment(time).format('x')
          setLoading(true)
          setParamsData({ ...initParams, date })
        }}
        onScrollToLower={() => {
          const time = formatTime(checkDate)
          const date = moment(time).format('x')
          setParamsData({
            ...paramsData,
            date,
            pageNum: paramsData.pageNum + 1
          })
        }}
      >
        {listData.map((item) => (
          <DetailItem key={item.id} data={item} />
        ))}
      </ListView>
    </View>
  )
}

export default Billdetail
