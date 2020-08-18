import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { getBanner } from '@/api/common'

import style from './AdBanner.module.scss'

const AdBanner = ({ paramsId }) => {
  const [adList, setAdList] = useState([])
  useEffect(() => {
    getBanner({ id: paramsId }).then((res) => {
      setAdList(res)
    })
  }, [])
  if (adList.length === 0) return null
  return (
    <View className={style.adSwiperBox}>
      <Swiper
        className={style.swiper}
        indicatorColor="rgba(255,255,255,0.9)"
        indicatorActiveColor="#fff"
        indicatorDots
        autoplay
      >
        {adList.map((item) => (
          <SwiperItem key={item.title}>
            <Image className={style.img} src={item.imgSrc} />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}

export default AdBanner
