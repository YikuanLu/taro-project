import Taro, { useRef, useState, useEffect } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, ScrollView } from '@tarojs/components'

import { debounce } from '@/assets/js/publicFn'

import Empty from '@/components/common/empty'

import style from './MyListView.module.scss'

const MyListView = ({
  children,
  onPullDownRefresh,
  onScrollToLower,
  hasMore,
  loading,
  isEmpty
}) => {
  const start = useRef(null)
  const scrollTop = useRef(null)
  const [moveDistance, setMoveDistance] = useState(0)
  const [transitionType, setTransitionType] = useState('all 300ms linear 0s')
  const [loadText, setLoadText] = useState('加载中...')
  const [isRefre, setIsRefre] = useState(false)

  useEffect(() => {
    // 当下拉超过 50 单位的时候触发下拉刷新
    if (moveDistance >= 50) {
      setLoadText('释放刷新')
      setIsRefre(true)
    }
  }, [moveDistance])

  const scrollBotton = () => {
    console.log('触底了')
    // 是否需要加载更多为 true 时触发
    if (hasMore) {
      onScrollToLower()
    }
  }

  return (
    <ScrollView
      className={style.content}
      scrollY
      onScroll={(e) => {
        scrollTop.current = e.detail.scrollTop
      }}
      // 上拉加载更多防抖方法
      onScrollToLower={debounce(scrollBotton, 300, false)}
    >
      <View
        onTouchStart={(e) => {
          start.current = e.touches[0].clientY
        }}
        onTouchMove={(e) => {
          const { touches } = e
          const { clientY } = touches[0]
          const distance = Math.floor((clientY - start.current) / 5)
          if (scrollTop.current > 0) return
          if (distance > 0) {
            setTransitionType('nune 0s ease 0s')
            setMoveDistance(distance)
          }
        }}
        onTouchEnd={() => {
          setTransitionType('all 300ms linear 0s')
          setMoveDistance(0)
          setLoadText('加载中...')
          if (isRefre) {
            onPullDownRefresh()
            setIsRefre(false)
          }
        }}
        style={{
          transform: `translate3d(0px, ${Taro.pxTransform(moveDistance)}, 0px)`,
          transition: transitionType
        }}
      >
        <View className={style.loading}>{loadText}</View>
        {/* 列表主体 */}
        {/* 判断展示的内容为[ 加载中 | 空数据页面 | 列表数据 ] */}
        {loading ? (
          <View className={style.loadingView}>加载中...</View>
        ) : isEmpty ? (
          <Empty />
        ) : (
          children
        )}
      </View>
    </ScrollView>
  )
}

MyListView.propTypes = {
  children: PropTypes.element.isRequired, // 传入的列表
  onPullDownRefresh: PropTypes.func.isRequired, //下拉刷新
  onScrollToLower: PropTypes.func.isRequired, //上拉加载
  hasMore: PropTypes.bool, //是否加载下一页内容
  loading: PropTypes.bool, //是否展示加载中
  isEmpty: PropTypes.bool //是否展示空白页
}

MyListView.defaultProps = {
  hasMore: false,
  loading: false,
  isEmpty: false
}

export default MyListView
