import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Navigator } from '@tarojs/components'

import { getBanner } from '@/api/site'
import style from './Style.module.scss'

const Banner = ({ posId }) => {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    const params = { id: posId }
    getBanner(params).then((res) => {
      setBanners(res)
    })
  }, [])

  if (!banners || !banners.length) {
    return null
  }

  return (
    <View>
      <Swiper
        className={style.swiperBox}
        indicatorColor="#999"
        indicatorActiveColor="#FFFFFFFF"
        indicatorDots
        autoplay
      >
        {banners.map((item) => {
          return (
            <SwiperItem key={item.title} className={style.swiperItem}>
              <Navigator url={item.url} title={item.title}>
                <Image className={style.swiperImg} src={item.imgSrc} />
              </Navigator>
            </SwiperItem>
          )
        })}
      </Swiper>
    </View>
  )
}

export default Banner
