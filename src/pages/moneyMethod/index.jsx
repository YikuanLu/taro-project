import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import classNames from 'classnames'

import { getRouterSearch } from '@/assets/js/publicFn'
import { moneyMethods } from '@/assets/js/types'
import IconFont from '@/icon'
import NavBar from '@/components/common/navBar'
import style from './Style.module.scss'

const MoneyMethod = () => {
  const [showStatus, setShowStatus] = useState({ 0: true })
  const arrowIcon = {
    hide: 'jinru-copy-copy-copy',
    show: 'jinru-copy-copy'
  }

  //切换显示
  const toggleShow = (i) => {
    setShowStatus({ [i]: !showStatus[i] })
  }

  const isApp = getRouterSearch() && getRouterSearch().isApp

  return (
    <View className={style.box}>
      {!isApp && <NavBar fixed title="赚钱攻略" />}
      <View className={style.list}>
        {moneyMethods.map((item, index) => {
          return (
            <View key={item.title} className={style.item}>
              <View className={style.title} onClick={() => toggleShow(index)}>
                <Text className={style.text}>{item.title}</Text>
                <IconFont
                  name={arrowIcon[showStatus[index] ? 'show' : 'hide']}
                  color="#E5E5E5"
                  size={32}
                />
              </View>
              <View
                className={classNames(style.swiperBox, {
                  [style.hide]: !showStatus[index]
                })}
              >
                <Swiper
                  indicatorColor="#999"
                  indicatorActiveColor="#FFFFFFFF"
                  indicatorDots
                >
                  {item.imgs.map((img) => {
                    return (
                      <SwiperItem key={img} className={style.swiperItem}>
                        <Image className={style.swiperImg} src={img} />
                      </SwiperItem>
                    )
                  })}
                </Swiper>
              </View>
            </View>
          )
        })}
      </View>
      {/* <View className={style.btn}>
        <View className={style.contact}>联系客服</View>
      </View> */}
    </View>
  )
}

MoneyMethod.config = {
  navigationBarTitleText: '赚钱攻略'
}

export default MoneyMethod
