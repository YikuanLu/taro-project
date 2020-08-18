import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'

import IconFont from '@/icon'
import { formatTime, isLogin } from '@/assets/js/publicFn'
import { switchUserNotify } from '@/api/battle'
import { GAME_TYPES } from '@/assets/js/types'
import style from './Style.module.scss'

const MatchItem = ({ data }) => {
  const [match, setMatch] = useState(data)

  if (!data) return null

  // 切换提醒
  const switchNotify = (e, status, params) => {
    e.stopPropagation()
    if (!isLogin()) {
      Taro.navigateTo({ url: '/pages/login/index' })
      return
    }
    switchUserNotify(params).then(() => {
      Taro.showToast({
        icon: 'none',
        title: '操作成功'
      })
      setMatch({
        ...match,
        isFocus: !status
      })
    })
  }

  // 比赛详情
  const toMatch = () => {
    const query = `?matchId=${data.matchId}&gameType=${data.gameType}`
    Taro.navigateTo({ url: `/pages/live/index${query}` })
  }

  return (
    <View className={style.box} onClick={toMatch}>
      <View className={style.row}>
        <View className={classNames(style.siderBox, style.left)}>
          <Text className={style.name}>{match.teamAShortName || 'TBD'}</Text>
          {match.teamALogo ? (
            <Image
              mode="widthFix"
              className={style.logo}
              src={match.teamALogo}
            ></Image>
          ) : (
            <View className={style.logo}>
              <IconFont
                name={GAME_TYPES[match.gameType].icon}
                color={[]}
                size={50}
              />
            </View>
          )}
        </View>
        <View className={style.centerBox}>
          {match.status === 0 ? (
            <View
              onClick={(e) =>
                switchNotify(e, match.isFocus, {
                  game: match.gameType,
                  matchId: match.matchId
                })
              }
            >
              {match.isFocus ? (
                <IconFont
                  name="tixingtianchong"
                  color={['#3F8FFD']}
                  size={40}
                />
              ) : (
                <IconFont
                  name="tixing"
                  color={['#9FA8B6', '#9FA8B6']}
                  size={40}
                />
              )}
            </View>
          ) : (
            <Text className={style.score}>
              {match.teamAScore} - {match.teamBScore}
            </Text>
          )}
        </View>
        <View className={classNames(style.siderBox, style.right)}>
          {match.teamBLogo ? (
            <Image
              mode="widthFix"
              className={style.logo}
              src={match.teamBLogo}
            ></Image>
          ) : (
            <View className={style.logo}>
              <IconFont
                name={GAME_TYPES[match.gameType].icon}
                color={[]}
                size={50}
              />
            </View>
          )}
          <Text className={style.name}>{match.teamBShortName || 'TBD'}</Text>
        </View>
      </View>
      <View className={style.row}>
        <View className={classNames(style.siderBox, style.left)}>
          <View
            className={classNames(
              style.index,
              { [style.down]: match.teamATrend === -1 },
              { [style.up]: match.teamATrend === 1 }
            )}
          >
            {!!match.teamARangFen && (
              <Text className={style.textSm}>{match.teamARangFen}</Text>
            )}
            <Text className={style.text}>{match.teamAOdds || '1.00'}</Text>
            {match.teamATrend === -1 && (
              <IconFont name="jiantou-copy" color={['#2ECC71']} size={16} />
            )}
            {match.teamATrend === 1 && (
              <IconFont name="jiantou" color={['#F04844']} size={16} />
            )}
          </View>
        </View>
        <View className={style.centerBox}>
          {match.status === 0 && (
            <Text className={style.text}>
              未开始 {formatTime(match.matchTime, 'HH:mm')}
            </Text>
          )}
          {match.status === 1 && (
            <Text className={style.text}>
              第{match.sort}局 {formatTime(match.matchTime, 'HH:mm')}
            </Text>
          )}
          {match.status === 2 && (
            <Text className={style.text}>
              已结束 {formatTime(match.matchTime, 'HH:mm')}
            </Text>
          )}
        </View>
        <View className={classNames(style.siderBox, style.right)}>
          <View
            className={classNames(
              style.index,
              { [style.down]: match.teamBTrend === -1 },
              { [style.up]: match.teamBTrend === 1 }
            )}
          >
            {!!match.teamBRangFen && (
              <Text className={style.textSm}>{match.teamBRangFen}</Text>
            )}
            <Text className={style.text}>{match.teamBOdds || '1.00'}</Text>
            {match.teamBTrend === -1 && (
              <IconFont name="jiantou-copy" color={['#2ECC71']} size={16} />
            )}
            {match.teamBTrend === 1 && (
              <IconFont name="jiantou" color={['#F04844']} size={16} />
            )}
          </View>
        </View>
      </View>
    </View>
  )
}

export default MatchItem
