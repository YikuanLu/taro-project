import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text, Image, Video } from '@tarojs/components'
import classNames from 'classnames'

import { formatTime, isLogin } from '@/assets/js/publicFn'
import { gameMatchs } from '@/api/battle'
import { addGameSupport, getGameSupportQty } from '@/api/extra'
import IconFont from '@/icon'
import { GAME_TYPES, GAME_STATUS } from '@/assets/js/types'
import NavBar from '@/components/common/navBar'
import style from './Style.module.scss'

const LiveHeader = ({ matchParams, baseInfo }) => {
  const [supportRate, setSupportRate] = useState([]) // 支持率
  const [liveVideo, setLiveVideo] = useState([]) // 直播地址
  const [isPlayVideo, setIsPlayVideo] = useState(false) // 是否播放视频
  const [playUrl, setPlayUrl] = useState('') // 直播地址
  const { gameType = 'lol', matchId } = matchParams || {}

  useEffect(() => {
    // 查询游戏支持率
    getGameSupportQty({ matchId, game: gameType }).then((res) => {
      setSupportRate(res)
    })

    // 获取直播地址
    gameMatchs[gameType].liveVideo &&
      gameMatchs[gameType].liveVideo({ matchId }).then((res) => {
        setLiveVideo(res)
      })
  }, [])

  if (!baseInfo) return

  // 计算支持率
  const calcSupport = (role) => {
    const a = supportRate[0]
    const b = supportRate[1]
    const all = a + b
    if (a + b === 0 || (!a && !b)) {
      return '50%'
    }
    const aRate = ((a / all) * 100).toFixed(0)
    if (role === 0) {
      return `${aRate}%`
    } else {
      return `${100 - aRate}%`
    }
  }
  // 提交支持
  const support = (index) => {
    if (!isLogin()) {
      Taro.navigateTo({ url: '/pages/login/index' })
      return
    }
    const params = {
      game: gameType,
      matchId,
      index
    }
    addGameSupport(params)
      .then(() => {
        index === 0
          ? setSupportRate([supportRate[0] + 1, supportRate[1]])
          : setSupportRate([supportRate[0], supportRate[1] + 1])
        Taro.showToast({
          icon: 'none',
          title: '支持成功'
        })
      })
      .catch((e) => {
        const tips = {
          AlreadySupport: '已支持！'
        }
        const msg = e && e.message
        Taro.showToast({
          icon: 'none',
          title: tips[msg] || msg
        })
      })
  }

  // 显示直播视频
  const showVideo = (url) => {
    setPlayUrl(url)
    setIsPlayVideo(true)
  }
  return (
    <View className={style.topBar}>
      <NavBar
        fixed={false}
        title={`${baseInfo.teamAName} vs ${baseInfo.teamBName}`}
        transparent
      />

      <View className={style.leagueInfo}>
        <View className={style.left}>
          <View className={style.iconfont}>
            <IconFont
              name={GAME_TYPES[gameType].icon}
              color={[GAME_TYPES[gameType].color, GAME_TYPES[gameType].color]}
              size={30}
            />
          </View>
          <Text className={style.name}>{baseInfo.leagueName}</Text>
          <Text className={style.bo}>BO{baseInfo.bo}</Text>
        </View>
        <View>{formatTime(baseInfo.matchTime, 'YYYY-MM-DD HH:mm:ss')}</View>
      </View>

      <View className={style.teamInfo}>
        <View className={style.teamAB}>
          <View className={style.teamLogo}>
            <Image
              mode="widthFix"
              className={style.logo}
              src={baseInfo.teamALogo}
            ></Image>
          </View>
          <Text className={style.teamName}>{baseInfo.teamAName}</Text>
        </View>
        <View className={style.centerAB}>
          <Text className={style.text}>
            {baseInfo.teamAScore || 0}-{baseInfo.teamBScore || 0}
          </Text>
          <Text
            className={classNames(style.status, {
              [style.going]: baseInfo.status === 1
            })}
          >
            {GAME_STATUS[baseInfo.status]}
          </Text>
        </View>
        <View className={style.teamAB}>
          <View className={style.teamLogo}>
            <Image
              mode="widthFix"
              className={style.logo}
              src={baseInfo.teamBLogo}
            ></Image>
          </View>
          <Text className={style.teamName}>{baseInfo.teamBName}</Text>
        </View>
      </View>

      <View className={style.support}>
        <Text className={style.text}>支持</Text>
        <View onClick={() => support(0)}>
          <IconFont
            name={supportRate[0] ? 'dianzan-' : 'dianzan'}
            color={['#fff']}
            size={40}
          />
        </View>
        <View className={style.rateBar}>
          <View className={style.rateA}>{calcSupport(0)}</View>
          <View
            className={style.leftProcess}
            style={{ width: calcSupport(0) }}
          ></View>
          <View
            className={style.rightProcess}
            style={{ width: calcSupport(1) }}
          ></View>
          <View className={style.rateB}>{calcSupport(1)}</View>
        </View>
        <View onClick={() => support(1)}>
          <IconFont
            name={supportRate[1] ? 'dianzan-' : 'dianzan'}
            color={['#fff']}
            size={40}
          />
        </View>
        <Text className={style.text}>支持</Text>
      </View>

      <View
        className={classNames(style.liveUrls, {
          [style.between]: liveVideo.length > 3
        })}
      >
        {liveVideo.map((item) => {
          return (
            <View
              key={item.id}
              className={style.item}
              onClick={() => showVideo(item.url)}
            >
              {item.name}
            </View>
          )
        })}
      </View>

      {/* 视频播放窗口 */}
      <View
        className={classNames(style.videoBox, { [style.show]: isPlayVideo })}
      >
        <Video
          className={style.video}
          src={playUrl}
          controls
          autoplay={false}
          initialTime="0"
          id="video"
          loop={false}
          muted={false}
        />
        <View className={style.close} onClick={() => setIsPlayVideo(false)}>
          <IconFont name="guanbi" color={['#fff']} size={40} />
        </View>
      </View>
    </View>
  )
}

export default LiveHeader
