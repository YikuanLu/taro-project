import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import { getEncryptedString, checkNamePhone, logup } from '@/api/user'
import { validate, getRouterSearch } from '@/assets/js/publicFn'
import encryption from '@/assets/js/secret.js'

import MyCountdown from '@/components/common/countdown'
import FormErrMsg from '@/components/common/formErrMsg'

import MyCheckBox from '@/components/common/myCheckBox'

import IconFont from '@/icon'
import style from './TaskForm.module.scss'

const TaskForm = () => {
  const [canHandleClick, setCanHandleClick] = useState(false)
  // 密码展示样式
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const [isCheck, setIsCheck] = useState(true)

  const [inviteCode, setInviteCode] = useState('')
  useEffect(() => {
    const queryMap = getRouterSearch()
    setInviteCode(queryMap.inviteCode)
  }, [])

  // 昵称 =======================================================================================
  // const [nickName, setNickName] = useState({
  //   value: ''
  // })
  // // 昵称状态
  // const [nickNameState, setNickNameState] = useState({
  //   value: null,
  //   msg: ''
  // })
  // const nickNameChange = (value) => {
  //   setNickName({ value })
  //   return value
  // }
  // const nickNameBlur = (value) => {
  //   if (!value) {
  //     setNickNameState({
  //       value: false,
  //       msg: '请输入正确昵称'
  //     })
  //     return
  //   }
  //   checkNamePhone({
  //     nickName: nickName.value
  //   })
  //     .then(({ status }) => {
  //       if (status) {
  //         setNickNameState({
  //           value: true,
  //           msg: ''
  //         })
  //       } else {
  //         setNickNameState({
  //           value: false,
  //           msg: '昵称已被使用'
  //         })
  //       }
  //     })
  //     .catch(() => {
  //       setNickNameState({
  //         value: null,
  //         msg: ''
  //       })
  //     })
  // }
  // 昵称 =======================================================================================

  // 手机 =======================================================================================
  const [phone, setPhone] = useState({
    value: ''
  })
  // 手机状态
  const [phoneState, setPhoneState] = useState({
    value: null,
    msg: ''
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
    if (!state) {
      setPhoneState({
        value: state,
        msg: '请输入正确手机号'
      })
      return
    }
    checkNamePhone({
      phone: phone.value
    })
      .then(({ status }) => {
        if (status) {
          setPhoneState({
            value: true,
            msg: ''
          })
        } else {
          setPhoneState({
            value: false,
            msg: '手机号已注册'
          })
        }
      })
      .catch(() => {
        setPhoneState({
          value: null,
          msg: ''
        })
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
      // nickName.value &&
      validate('phone', phone.value) &&
      validate('password', password.value) &&
      validate('code', code.value)
    ) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [
    // nickName.value,
    phone.value,
    password.value,
    code.value
  ])

  // 提交表单
  const onSubmit = () => {
    if (!isCheck) {
      Taro.showToast({
        title: '请勾选用户协议',
        icon: 'none',
        duration: 2000
      })
      return
    }
    const { iv, key } = Taro.getStorageSync('encryptedString')
    const params = {
      // nickName: nickName.value,
      phone: phone.value,
      code: code.value,
      password: encryption(password.value, key, iv),
      inviteCode: inviteCode
    }
    logup(params).then((res) => {
      Taro.setStorageSync('token', res.token)
      Taro.setStorageSync('userInfor', res)
      Taro.showToast({
        title: '登录成功',
        icon: 'none',
        duration: 2000
      }).then(() => {
        window.location.reload()
      })
    })
  }

  const isErrorClass = (state) => (state === false ? style.errorInput : null)
  // const nickNameClassName = `${style.formInput} ${isErrorClass(
  //   nickNameState.value
  // )}`
  const phoneClassName = `${style.formInput} ${isErrorClass(phoneState.value)}`
  const codeClassName = `${style.formInput} ${isErrorClass(codeState.value)}`
  const passwordClassName = `${style.formInput} ${isErrorClass(
    passwordState.value
  )}`
  // const NICKNAME_INPUT_PROPS = {
  //   name: 'nickName',
  //   type: 'text',
  //   className: nickNameClassName,
  //   placeholder: '昵称'
  // }
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
    <AtForm className={style.form} onSubmit={onSubmit}>
      {/* 昵称 */}
      {/* <View className={style.formItem}>
        <AtInput
          {...NICKNAME_INPUT_PROPS}
          value={nickName.value}
          onBlur={nickNameBlur}
          onChange={nickNameChange}
        />
        <FormErrMsg
          isPadding={false}
          isShow={nickNameState.value === false}
          msg={nickNameState.msg}
        />
      </View> */}
      {/* 手机号 */}
      <View className={style.formItem}>
        <AtInput
          {...PHONE_INPUT_PROPS}
          value={phone.value}
          onBlur={phoneBlur}
          onChange={phoneChange}
        />
        <FormErrMsg
          isPadding={false}
          isShow={phoneState.value === false}
          msg={phoneState.msg}
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
            type={0}
          />
        </AtInput>
        <FormErrMsg
          isPadding={false}
          isShow={codeState.value === false}
          msg="请输入验证码"
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
          isPadding={false}
          isShow={passwordState.value === false}
          msg="请输入6-20位数字+字母组合"
        />
      </View>

      <View className={style.agreement}>
        <MyCheckBox
          isChecked={isCheck}
          handleClick={() => {
            setIsCheck(!isCheck)
          }}
        />
        <View className={style.checkLabel}>
          已阅读并同意
          <Text className={style.agreementLink}>《尚牛电竞服务协议》</Text>
        </View>
      </View>

      {/* 按钮 */}
      <AtButton
        disabled={!canSubmit}
        className={`${style.btn} ${style.submit} `}
        type="primary"
        formType="submit"
      >
        立即注册领取
      </AtButton>
    </AtForm>
  )
}

export default TaskForm
