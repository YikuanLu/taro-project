import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Input, Button, Image } from '@tarojs/components'

import blockLine from '@/assets/img/activity/block-line.png'
import IconFont from '@/icon'
import { getEncryptedString, checkNamePhone, logup } from '@/api/user'
import { validateSms } from '@/api/common'
import { validate, getRouterSearch } from '@/assets/js/publicFn'
import NavBar from '@/components/common/navBar'
import MyCountdown from '@/components/common/countdown'
import ActivityRules from '@/components/activity/rulesModal'
import encryption from '@/assets/js/secret.js'
import style from './Style.module.scss'

const IncomeShare = () => {
  const [formData, setFormData] = useState({})
  const [curStep, setCurStep] = useState(1)
  const [canSend, setCanSend] = useState(true)
  const [pwdType, setPwdType] = useState('password')
  const [showRules, setShowRules] = useState(false)

  const inviteCode = getRouterSearch().inviteCode

  // 密码可见图标
  const pwdIcons = {
    password: 'yanjing',
    text: 'yanjingx'
  }

  // 赋值
  const getValues = ({ target }, name) => {
    setFormData({ ...formData, ...{ [name]: target.value } })
  }
  // 第一步
  const stepOne = () => {
    if (!formData.phone) {
      Taro.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return
    }

    if (!validate('phone', formData.phone)) {
      Taro.showToast({
        title: '请输入正确手机号',
        icon: 'none'
      })
      return
    }

    checkNamePhone({
      phone: formData.phone
    }).then(({ status }) => {
      if (!status) {
        Taro.showToast({
          title: '手机号已注册',
          icon: 'none'
        })
        return
      }
      setCanSend(true)
      setCurStep(2)
    })
  }
  // 第二步
  const stepTwo = () => {
    if (!formData.code) {
      Taro.showToast({
        title: '请输入验证码',
        icon: 'none'
      })
      return
    }

    validateSms(formData).then(() => {
      setCurStep(3)
    })
  }

  // 最后一步提交
  const submit = () => {
    if (!formData.password) {
      Taro.showToast({
        title: '请输入密码',
        icon: 'none'
      })
      return
    }

    if (!validate('password', formData.password)) {
      Taro.showToast({
        title: '请输入正确格式的密码',
        icon: 'none'
      })
      return
    }

    const { iv, key } = Taro.getStorageSync('encryptedString')
    Object.assign(formData, {
      password: encryption(formData.password, key, iv),
      inviteCode
    })

    logup(formData).then((res) => {
      Taro.setStorageSync('token', res.token)
      Taro.setStorageSync('userInfor', res)
      Taro.showToast({
        title: '登录成功',
        icon: 'none',
        duration: 2000
      }).then(() => {
        Taro.navigateTo({ url: '/pages/activity/regSuccess/index' })
      })
    })
  }

  // 初始化
  useEffect(() => {
    const encryptedString = Taro.getStorageSync('encryptedString')
    if (!encryptedString) {
      getEncryptedString().then((res) => {
        Taro.setStorageSync('encryptedString', res)
      })
    }
  }, [])

  // 表单提交赋值
  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <View className={style.box}>
      {showRules && <ActivityRules onClose={() => setShowRules(false)} />}
      <NavBar fixed title="" transparent backUrl="/pages/index/index" />
      <View className={style.topBox}>
        <View className={style.rules} onClick={() => setShowRules(true)}>
          活动规则
        </View>
      </View>
      <View className={style.bgBox}>
        <Image className={style.leftLine} src={blockLine} />
        <Image className={style.rightLine} src={blockLine} />
        {/* 第一步  */}
        {curStep === 1 && (
          <View>
            <View className={style.formItem}>
              <View className={style.iconfont}>
                <IconFont name="shouji" color="#C4CCD7" size={30} />
              </View>
              <Input
                maxLength="11"
                className={style.inputs}
                placeholder="手机号"
                onChange={(e) => getValues(e, 'phone')}
              ></Input>
            </View>
            <Button className={style.submit} onClick={() => stepOne()}>
              立即领取现金
            </Button>
          </View>
        )}
        {/* 第二步  */}
        {curStep === 2 && (
          <View>
            <View className={style.formItem}>
              <View className={style.iconfont}>
                <IconFont name="yanzhengma" color="#C4CCD7" size={30} />
              </View>
              <Input
                maxLength="4"
                className={style.inputs}
                placeholder="验证码"
                onChange={(e) => getValues(e, 'code')}
              ></Input>
              <Button className={style.getCode}>
                <MyCountdown
                  seconds={60}
                  canHandleClick={canSend}
                  phone={formData.phone}
                  type={0}
                />
              </Button>
            </View>
            <Button className={style.submit} onClick={() => stepTwo()}>
              下一步
            </Button>
          </View>
        )}
        {/* 第三步  */}
        {curStep === 3 && (
          <View>
            <View className={style.formItem}>
              <View className={style.iconfont}>
                <IconFont name="suo" color="#C4CCD7" size={30} />
              </View>
              <Input
                type={pwdType}
                maxLength="20"
                className={style.inputs}
                placeholder="设置密码6-20位字母与数字组合"
                onChange={(e) => getValues(e, 'password')}
              ></Input>
              <View
                className={style.iconfont}
                onClick={() =>
                  setPwdType(pwdType === 'text' ? 'password' : 'text')
                }
              >
                <IconFont name={pwdIcons[pwdType]} color="#C4CCD7" size={30} />
              </View>
            </View>
            <Button className={style.submit} onClick={() => submit()}>
              立即领取现金
            </Button>
          </View>
        )}
      </View>
      {/* 静态内容 */}
      <View className={style.bgBox}>
        <Image className={style.leftLine} src={blockLine} />
        <Image className={style.rightLine} src={blockLine} />
        <View className={style.blockTitle}>优势1：看比赛赚钱</View>
        <View className={style.textBox}>
          <View className={style.text}>1.每天边看比赛边赚钱</View>
          <View className={style.text}>2.每天分享比赛赚钱</View>
          <View className={style.text}>3.每天阅读资讯赚钱</View>
          <View className={style.text}>4.每天签到赚钱</View>
          <View className={style.text}>5.推荐好友赚钱</View>
        </View>
      </View>
      <View className={style.bgBox}>
        <Image className={style.leftLine} src={blockLine} />
        <Image className={style.rightLine} src={blockLine} />
        <View className={style.blockTitle}>优势2：比赛数据</View>
        <View className={style.textBox}>
          <View className={style.text}>1.聚集5款热门电竞游戏赛事</View>
          <View className={style.text}>
            2.比赛赛前对战数据、直播实时数据、赛后数据
          </View>
          <View className={style.text}>
            3.提供各联赛比赛预告、直播、赛果数据
          </View>
          <View className={style.text}>4.每个联赛、战队、选手综合数据查看</View>
          <View className={style.text}>5.每场比赛全网竞猜指数实时数据</View>
        </View>
      </View>
      <View className={style.bgBox}>
        <Image className={style.leftLine} src={blockLine} />
        <Image className={style.rightLine} src={blockLine} />
        <View className={style.blockTitle}>优势3：电竞资讯</View>
        <View className={style.textBox}>
          <View className={style.text}>
            1.聚热门游戏资讯和比赛资讯的电竞资讯站
          </View>
          <View className={style.text}>
            2.实时更新游戏相关的资讯、视频、图集信息
          </View>
          <View className={style.text}>
            3.实时更新赛事战报、联赛、战队、选手资讯
          </View>
          <View className={style.text}>
            4.实时更新各个职业玩家比赛的游戏攻略信息
          </View>
          <View className={style.text}>
            5.实时更新场边花絮、趣味八卦有乐趣的资讯
          </View>
        </View>
      </View>
      <View className={style.bgBox}>
        <View className={style.blockTitle}>优势4：玩家社区</View>
        <View className={style.textBox}>
          <View className={style.text}>
            1.玩家可经营发表自己想法、经验、攻略赚钱
          </View>
          <View className={style.text}>2.玩家与玩家之间可以相互沟通交流</View>
          <View className={style.text}>
            3.玩家社区共享信息，可提问分享观点解决问题
          </View>
          <View className={style.text}>
            4.汇集各个玩家对电竞的资讯、视频、图集作品
          </View>
          <View className={style.text}>
            5.与玩家一起打造电竞领域的精英文化交流圈
          </View>
        </View>
      </View>
    </View>
  )
}

IncomeShare.config = {
  navigationBarTitleText: '新手活动'
}

export default IncomeShare
