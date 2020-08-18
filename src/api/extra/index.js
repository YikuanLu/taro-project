import $axios from '@/utils/axios'

// 获取用户和游戏的关系
export const getUserGameRealtion = () =>
  $axios.get('/api/extra/user/getUserGameRealtion')
// 设置用户和游戏的关系
export const setUserGameRealtion = (params) =>
  $axios.post('/api/extra/user/setUserGameRealtion', params)
// 登录用户支持比赛
export const addGameSupport = (params) =>
  $axios.get('/api/extra/user/addGameSupport', params)
// 查询游戏支持率
export const getGameSupportQty = (params) =>
  $axios.get('/api/extra/user/getGameSupportQty', params)
