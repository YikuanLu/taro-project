import { getEncryptedString, login } from '@/api/user'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { setUserGameRealtion } from '@/api/extra'
import { validate, isLogin } from '@/assets/js/publicFn'
import encryption from '@/assets/js/secret.js'
import FormErrMsg from '@/components/common/formErrMsg'
import IconFont from '@/icon'
import style from './Style.module.scss'

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  const [phone, setPhone] = useState({
    value: '',
    state: null
  })
  const [phoneState, setPhoneState] = useState({
    value: null
  })
  const phoneBlur = (value) => {
    const state = validate('phone', value)
    setPhoneState({
      value: state
    })
  }
  const phoneChange = (value) => {
    setPhone({
      value
    })
    return value
  }

  const [password, setPassword] = useState({
    value: ''
  })
  const [passwordState, setPasswordState] = useState({
    value: null
  })
  const passwordBlur = (value) => {
    const state = validate('password', value)
    setPasswordState({
      value: state
    })
  }
  const passwordChange = (value) => {
    setPassword({
      value
    })
    return value
  }

  // 提交按钮是否可点
  const [canSubmit, setCanSubmit] = useState(false)
  useEffect(() => {
    if (
      validate('phone', phone.value) &&
      validate('password', password.value)
    ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [phone.value, password.value])

  useEffect(() => {
    if (isLogin()) {
      Taro.navigateTo({ url: '/pages/index/index' })
    }
    const encryptedString = Taro.getStorageSync('encryptedString')
    if (!encryptedString) {
      getEncryptedString().then((res) => {
        Taro.setStorageSync('encryptedString', res)
      })
    }
  }, [])

  // 设置用户游戏关系
  const setGameRelation = () => {
    const gameTypes = Taro.getStorageSync('gameTypes') || []
    const gameStr = gameTypes.join(',')
    setUserGameRealtion({ content: gameStr })
  }

  // 提交表单
  const onSubmit = () => {
    const { iv, key } = Taro.getStorageSync('encryptedString')
    // console.log('password', password.value)
    const params = {
      phone: phone.value,
      password: encryption(password.value, key, iv)
    }
    login(params).then((res) => {
      setGameRelation()
      Taro.setStorageSync('token', res.token)
      Taro.setStorageSync('userInfor', res)
      Taro.showToast({
        title: '登录成功',
        icon: 'none',
        duration: 2000
      }).then(() => {
        if (res.isFirstReg === 1) {
          Taro.navigateTo({ url: '/pages/guide/index' })
        } else {
          Taro.navigateTo({ url: '/pages/index/index' })
        }
      })
    })
  }

  const phoneClassName = `${style.formInput} ${
    phoneState.value === false ? style.errorInput : null
  }`
  const passwordClassName = `${style.formInput} ${
    passwordState.value === false ? style.errorInput : null
  }`
  const PHONE_INPUT_PROPS = {
    name: 'phone',
    type: 'text',
    className: phoneClassName,
    placeholder: '手机号码'
  }
  const PASSWORD_INPUT_PROPS = {
    name: 'password',
    type: isPasswordShow ? 'text' : 'password',
    className: passwordClassName,
    placeholder: '登录密码'
  }
  const passwordIconType = isPasswordShow ? 'yanjing' : 'yanjingx'

  return (
    <View className={style.content}>
      <View>
        <AtForm className={style.form} onSubmit={onSubmit}>
          {/* 手机号 */}
          <View className={style.formItem}>
            <AtInput
              {...PHONE_INPUT_PROPS}
              value={phone.value}
              onBlur={phoneBlur}
              onChange={phoneChange}
            />
            <FormErrMsg
              isShow={phoneState.value === false}
              msg="请输入正确手机号"
            />
          </View>
          {/* 密码 */}
          <View className={style.formItem}>
            <AtInput
              {...PASSWORD_INPUT_PROPS}
              value={password.value}
              onBlur={passwordBlur}
              onChange={passwordChange}
            />
            <View
              className={style.passwordIcon}
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={() => {
                setIsPasswordShow(!isPasswordShow)
              }}
            >
              <IconFont name={passwordIconType} color="#B4D6FF" size={30} />
            </View>
            <FormErrMsg
              isShow={passwordState.value === false}
              msg="请输入6-20位数字+字母组合"
            />
          </View>
          <View className={style.forget}>
            <Text
              onClick={() =>
                Taro.navigateTo({ url: '/pages/loginForget/index' })
              }
            >
              忘记密码？
            </Text>
          </View>
          {/* 按钮 */}
          <AtButton
            disabled={!canSubmit}
            className={`${style.btn} ${style.submit}`}
            type="primary"
            formType="submit"
          >
            登录
          </AtButton>
          <AtButton
            className={`${style.btn} ${style.regist}`}
            type="secondary"
            onClick={() => Taro.navigateTo({ url: '/pages/logup/index' })}
          >
            注册
          </AtButton>
        </AtForm>
      </View>
    </View>
  )
}

export default Login
