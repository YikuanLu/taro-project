import $axios from '@/utils/axios'

// 获取密码加密秘钥
export const getEncryptedString = () =>
  $axios.post('/api/user/user/getEncryptedString')

// 注册
export const logup = (params) => $axios.post('/api/user/user/reg', params)

// 登录
export const login = (params) => $axios.post('/api/user/user/login', params)

// 忘记密码
export const resetPwd = (params) =>
  $axios.post('/api/user/user/resetPwd', params)

// 校验用户名和手机是否已注册
export const checkNamePhone = (params) =>
  $axios.get('/api/user/user/checkNamePhone', params)

// 获取用户钱包信息
export const getUserAccountInfor = (params) =>
  $axios.post('/api/user/userAccount/getInfo', params)

// 获取未读消息数量
// /api/info/user/articleComment/getNoReadTotal 获取评论数量 /GET
// /api/extra/user/sysMessage/getNoReadTotal 获取消息数量 /POST
export const getMsgOfUnread = () =>
  $axios.all([
    $axios.get('/api/info/user/articleComment/getNoReadTotal'),
    $axios.post('/api/extra/user/sysMessage/getNoReadTotal')
  ])

// 获取个人主页列表
export const getMyArtList = (params) =>
  $axios.get('/api/info/user/article/getMyArticles', params)

// 获取用户收藏比赛列表
export const getUserMatchList = (params) =>
  $axios.get('/api/battle/user/notify/matchList', params)

// 用户通过id收藏取消比赛
export const switchUserNotifyMatch = (params) =>
  $axios.get('/api/battle/user/notify/switchUserNotify', params)

// 获取用户收藏文章列表
export const getUserFavoriteArtList = (params) =>
  $axios.get('/api/info/user/article/pageCommentList', params)

// 取消收藏文章
export const cancelUserFavoriteArtList = (params) =>
  $axios.get('/api/info/user/articleCommon/deleteCollect', params)

// 获取用户评论列表
export const getUserAllComment = (params) =>
  $axios.get('/api/info/user/articleComment/pageUserList', params)

// 通过 id 删除用户评论
export const removeUserCommentById = (params) =>
  $axios.get('/api/info/user/articleComment/delete', params)

// 获取用户任务状态
export const getUserTaskInfo = (params) =>
  $axios.post('/api/user/user/task/getUserTaskInfo', params)

// 获取用户浏览记录
export const getUserRecord = (params) =>
  $axios.get('/api/info/user/articleCommon/getRecordPage', params)

// /api/user/userAmonut/getAmountLogTotal // 收入支出明细
// /api/user/userAmonut/amountLogPage  //获取用户资金流水
export const getAmountLogTotal = (params) =>
  $axios.get('/api/user/userAmonut/getAmountLogTotal', params)
export const getAmountLogPage = (params) =>
  $axios.get('/api/user/userAmonut/amountLogPage', params)

// /api/user/userCoin/getCoinLogTotal // 获取用代币明细
// /api/user/userCoin/coinLogPage // 获取用代币流水
export const getCoinLogTotal = (params) =>
  $axios.get('/api/user/userCoin/getCoinLogTotal', params)
export const getCoinLogPage = (params) =>
  $axios.get('/api/user/userCoin/coinLogPage', params)
