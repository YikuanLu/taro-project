import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'

// import { getMyArtList } from '@/api/user'
// import { pageSize } from '@/assets/js/types'

import NavBar from '@/components/common/navBar'
import Header from '@/components/userCenter/header'
import MenuList from '@/components/userCenter/menuList'
// import ContentList from '@/components/userCenter/contentList'
import UserScanList from '@/components/userScan/list'
import style from './UserCenter.module.scss'

const headerBtn = {
  firstType: 'icon',
  firstVal: 'shezhi',
  firstClick: () => {
    console.log('shezhi')
  }
}

const User = () => {
  const [userInfor, setUserInfor] = useState({})
  useEffect(() => {
    const headPic = Taro.getStorageSync('userInfor')
    setUserInfor(headPic)
  }, [])

  // const initListData = {
  //   rows: [],
  //   pageNum: 1,
  //   pageSize,
  //   total: 0,
  //   pageTotal: 0
  // }

  // const [listData, setListData] = useState({ ...initListData })
  // const [listParams, setParams] = useState({
  //   pageNum: 1,
  //   pageSize
  // })

  // const [isLoading, setIsLoading] = useState(false)
  // const [isEnd, setIsEnd] = useState(false)
  // useEffect(() => {
  //   if (!isLoading && !isEnd) {
  //     setIsLoading(true)
  //     getMyArtList(listParams).then((res) => {
  //       if (listParams.pageNum >= res.pageTotal) {
  //         setIsEnd(true)
  //       }
  //       setListData({
  //         ...res,
  //         rows: [...listData.rows, ...res.rows]
  //       })
  //       setIsLoading(false)
  //     })
  //   }
  // }, [listParams])

  // const onScrollToLower = () => {
  //   const curPageNum = listParams.pageNum + 1
  //   setParams({
  //     pageNum: curPageNum,
  //     pageSize: 2
  //   })
  // }

  // const { rows } = listData

  return (
    <ScrollView
      className={style.userCenter}
      scrollY
      // lowerThreshold={120}
      // onScrollToLower={onScrollToLower}
    >
      <NavBar title="个人主页" rightConfig={headerBtn} />
      <Header userInfor={userInfor} />
      <View className={style.menuBox}>
        <MenuList />
      </View>
      <UserScanList />
      {/* <ContentList rows={rows} />
      {isLoading ? <View className={style.loading}>加载中</View> : null}
      {isEnd ? <View className={style.loading}>暂无更多内容</View> : null} */}
    </ScrollView>
  )
}

export default User
