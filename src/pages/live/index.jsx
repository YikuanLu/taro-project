import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { gameMatchs } from '@/api/battle'
import Header from '@/components/live/header'
import Tabs from '@/components/live/tabs'
import Prospect from '@/components/live/prospect'
import AfterGame from '@/components/live/afterGame'
import MultipleLive from '@/components/live/multipleLive'
import Statistic from '@/components/live/statistic'
import News from '@/components/live/news'
import AppDownload from '@/components/live/appDownload'
import Comment from '@/components/live/comment'
import style from './Style.module.scss'

class Live extends Taro.Component {
  // 默认参数配置
  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      matchParams: {
        matchId: '',
        gameType: 'lol'
      },
      curTab: 2,
      baseInfo: {}
    }
  }

  componentWillMount() {
    const query = this.$router.params
    this.setState({
      matchParams: query
    })

    const { gameType, matchId } = query
    // 获取赛事基本信息
    gameMatchs[gameType].basicInfo({ matchId }).then((res) => {
      this.setState({
        baseInfo: res
      })
    })
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: '比赛详情',
    enablePullDownRefresh: true
  }

  // 切换tab
  switchTab = (val) => {
    this.setState({
      curTab: val
    })
  }

  render() {
    const { switchTab } = this
    const { matchParams, curTab, baseInfo } = this.state

    return (
      <View className={style.box}>
        <Header matchParams={matchParams} baseInfo={baseInfo} />
        <Tabs matchParams={matchParams} onClick={(e) => switchTab(e)} />
        {/* 赛前分析 */}
        {curTab === 1 && <Prospect matchParams={matchParams} />}
        {/* 全网指数 */}
        {curTab === 2 && (
          <Statistic matchParams={matchParams} baseInfo={baseInfo} />
        )}
        {/* 图文直播 */}
        {curTab === 3 && (
          <MultipleLive matchParams={matchParams} baseInfo={baseInfo} />
        )}
        {/* 赛后数据 */}
        {curTab === 4 && (
          <AfterGame matchParams={matchParams} baseInfo={baseInfo} />
        )}
        {/* 赛事战报 */}
        {curTab === 5 && <News matchParams={matchParams} />}
        <AppDownload />
        <Comment matchParams={matchParams} />
      </View>
    )
  }
}

export default Live
