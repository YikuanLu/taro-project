import $axios from '@/utils/axios'

// 首页-获取直播中赛事列表
export const liveMatchList = (params) =>
  $axios.get('/api/battle/app/liveMatchList', params)
// 首页-首页比赛和指数数据
export const matchList = (params) =>
  $axios.get('/api/battle/app/matchList', params)
// 首页-获取每个月的比赛数量
export const monthQuantity = (params) =>
  $axios.get('/api/battle/app/monthQuantity', params)
// 比赛详情-获取赛事需要显示的tab
export const getMatchTab = (params) =>
  $axios.get('/api/battle/app/getMatchTab', params)
// 看点-获取今日赛事列表
export const todayMatchList = (params) =>
  $axios.get('/api/battle/app/todayMatchList', params)
// 首页-获取用户收藏的赛事列表
export const notifyMatchList = (params) =>
  $axios.get('/api/battle/user/notify/matchList', params)
// 首页-用户添加删除赛事提醒
export const switchUserNotify = (params) =>
  $axios.get('/api/battle/user/notify/switchUserNotify', params)

// 用户添加删除赛事提醒
export const gameMatchs = {
  lol: {
    // 比赛基本信息-通过比赛id查询
    basicInfo: (params) =>
      $axios.get('/api/battle/lol/match/basicInfo', params),
    // 直播地址-通过matchId查询
    liveVideo: (params) =>
      $axios.get('/api/battle/lol/match/liveVideoList', params),
    // 赛前分析
    proSpect: (params) => $axios.get('/api/battle/lol/match/prospect', params),
    // 实时比分
    liveBattle: (params) =>
      $axios.get('/api/battle/lol/match/liveBattle', params),
    // 全网指数
    betInfoList: (params) =>
      $axios.get('/api/battle/lol/match/betInfoList', params)
  },
  dota: {
    // 比赛基本信息-通过比赛id查询
    basicInfo: (params) =>
      $axios.get('/api/battle/dota/match/basicInfo', params),
    // 直播地址-通过matchId查询
    liveVideo: (params) =>
      $axios.get('/api/battle/dota/match/livevideo', params),
    // 赛前分析
    proSpect: (params) => $axios.get('/api/battle/dota/match/prospect', params),
    // 实时比分
    liveBattle: (params) =>
      $axios.get('/api/battle/dota/match/battle/detail', params),
    // 全网指数
    betInfoList: (params) =>
      $axios.get('/api/battle/dota/match/betinfo', params),
    // 获取赛事的battle战局id列表
    battleIds: (params) =>
      $axios.get('/api/battle/dota/match/battle/ids', params),
    // 获取赛事文字直播
    battleLog: (params) =>
      $axios.get('/api/battle/dota/match/battleLog', params)
  },
  csgo: {
    // 比赛基本信息-通过比赛id查询
    basicInfo: (params) => $axios.get('/api/battle/csgo/match/info', params),
    // 赛前分析
    proSpect: (params) => $axios.get('/api/battle/csgo/match/prospect', params),
    // 实时比分
    liveBattle: (params) =>
      $axios.get('/api/battle/csgo/match/battleDetail', params),
    // 全网指数
    betInfoList: (params) =>
      $axios.get('/api/battle/csgo/match/betinfo', params),
    // 获取赛事文字直播
    battleLog: (params) =>
      $axios.get('/api/battle/csgo/match/battleLog', params)
  },
  ow: {
    // 比赛基本信息-通过比赛id查询
    basicInfo: (params) => $axios.get('/api/battle/ow/match/basicInfo', params),
    // 赛前分析
    proSpect: (params) => $axios.get('/api/battle/ow/match/prospect', params),
    // 全网指数
    betInfoList: (params) =>
      $axios.get('/api/battle/ow/match/betInfoList', params)
  },
  kog: {
    // 比赛基本信息-通过比赛id查询
    basicInfo: (params) =>
      $axios.get('/api/battle/kog/match/basicInfo', params),
    // 直播地址-通过matchId查询
    liveVideo: (params) =>
      $axios.get('/api/battle/kog/match/liveVideoList', params),
    // 赛前分析
    proSpect: (params) => $axios.get('/api/battle/kog/match/prospect', params),
    // 实时比分
    liveBattle: (params) =>
      $axios.get('/api/battle/kog/match/matchAfterData', params),
    // 全网指数
    betInfoList: (params) =>
      $axios.get('/api/battle/kog/match/betInfoList', params)
  }
}
