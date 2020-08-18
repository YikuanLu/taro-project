import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import { getEncryptedString, resetPwd } from '@/api/user'
import { validate, isLogin } from '@/assets/js/publicFn'
import encryption from '@/assets/js/secret.js'

import MyCountdown from '@/components/common/countdown'
import FormErrMsg from '@/components/common/formErrMsg'
import NavBar from '@/components/common/navBar'

import IconFont from '@/icon'
import style from './Style.module.scss'

const Forget = () => {
  const [canHandleClick, setCanHandleClick] = useState(false)
  // 密码展示样式
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  // 手机 =======================================================================================
  const [phone, setPhone] = useState({
    value: ''
  })
  // 手机状态
  const [phoneState, setPhoneState] = useState({
    value: null
  })
  const phoneChange = (value) => {
    const state = validate('phone', value)
    setCanHandleClick(state)
    setPhone({
      value
    })
    return value
  }
  const phoneBlur = (value) => {
    const state = validate('phone', value)
    setPhoneState({
      value: state
    })
  }
  // 手机 =======================================================================================

  // 验证码 =======================================================================================
  const [code, setCode] = useState({
    value: '',
    state: null
  })
  const [codeState, setCodeState] = useState({
    value: null
  })
  const codeChange = (value) => {
    setCode({
      value
    })
    return value
  }
  const codeBlur = (value) => {
    const state = validate('code', value)
    setCodeState({
      value: state
    })
  }
  // 验证码 =======================================================================================

  // 密码 =======================================================================================
  const [password, setPassword] = useState({
    value: '',
    state: null
  })
  const [passwordState, setPasswordState] = useState({
    value: null
  })
  const passwordChange = (value) => {
    setPassword({
      value
    })
    return value
  }
  const passwordBlur = (value) => {
    const state = validate('password', value)
    setPasswordState({
      value: state
    })
  }
  // 密码 =======================================================================================

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

  // 提交按钮是否可点
  const [canSubmit, setCanSubmit] = useState(false)
  useEffect(() => {
    if (
      validate('phone', phone.value) &&
      validate('password', password.value) &&
      validate('code', code.value)
    ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [phone.value, password.value, code.value])

  // 提交表单
  const onSubmit = () => {
    const { iv, key } = Taro.getStorageSync('encryptedString')
    const params = {
      phone: phone.value,
      code: code.value,
      password: encryption(password.value, key, iv)
    }
    resetPwd(params).then(() => {
      Taro.showToast({
        title: '修改成功',
        icon: 'none',
        duration: 2000
      }).then(() => {
        Taro.navigateTo({ url: '/pages/login/index' })
      })
    })
  }

  const isErrorClass = (state) => (state === false ? style.errorInput : null)
  const phoneClassName = `${style.formInput} ${isErrorClass(phoneState.value)}`
  const codeClassName = `${style.formInput} ${isErrorClass(codeState.value)}`
  const passwordClassName = `${style.formInput} ${isErrorClass(
    passwordState.value
  )}`
  const PHONE_INPUT_PROPS = {
    name: 'phone',
    type: 'text',
    className: phoneClassName,
    placeholder: '手机号码'
  }
  const CODE_INPUT_PROPS = {
    name: 'code',
    type: 'text',
    className: codeClassName,
    placeholder: '验证码'
  }
  const PASSWORD_INPUT_PROPS = {
    name: 'password',
    type: isPasswordShow ? 'text' : 'password',
    className: passwordClassName,
    placeholder: '新密码6-20位字母数字组合'
  }
  const passwordIconType = isPasswordShow ? 'yanjing' : 'yanjingx'

  return (
    <View className={style.content}>
      <NavBar title="忘记密码" transparent />
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
        {/* 验证码 */}
        <View className={style.formItem}>
          <AtInput
            {...CODE_INPUT_PROPS}
            value={code.value}
            onBlur={codeBlur}
            onChange={codeChange}
          >
            <MyCountdown
              seconds={60}
              canHandleClick={canHandleClick}
              phone={phone.value}
              type={2}
            />
          </AtInput>
          <FormErrMsg isShow={codeState.value === false} msg="请输入验证码" />
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
        {/* 按钮 */}
        <AtButton
          disabled={!canSubmit}
          className={`${style.btn} ${style.submit}`}
          type="primary"
          formType="submit"
        >
          确认修改
        </AtButton>
      </AtForm>
    </View>
  )
}

export default Forget
