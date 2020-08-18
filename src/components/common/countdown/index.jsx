import Taro, { useState, useEffect } from '@tarojs/taro'
import { Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import { sendSms } from '@/api/common'

import style from './Style.module.scss'

const Countdown = ({ seconds, canHandleClick, phone, type }) => {
  let [count, setCount] = useState(seconds)
  const [canStart, setCanStart] = useState(canHandleClick)

  useEffect(() => {
    setCanStart(canHandleClick)
  }, [canHandleClick])

  useEffect(() => {
    if (canStart === true || canHandleClick === false) return
    let timer = null
    sendSms({
      phone,
      type
    })
      .then(() => {
        Taro.showToast({
          title: '发送成功',
          icon: 'none'
        })
        let num = seconds - 2
        setCount(seconds - 1)
        timer = setInterval(() => {
          if (num > 0) {
            setCount(num--)
            return
          }
          setCount(seconds)
          setCanStart(true)
          clearInterval(timer)
        }, 1000)
      })
      .catch(() => {
        setCount(seconds)
        setCanStart(true)
        clearInterval(timer)
      })

    return () => {
      timer = null
    }
  }, [canStart])

  const start = () => {
    if (canStart === false) return
    setCanStart(false)
  }

  return (
    <Text onClick={start} className={style.myCountdown}>
      {count === seconds ? '获取验证码' : `${count}s`}
    </Text>
  )
}

Countdown.propTypes = {
  seconds: PropTypes.number,
  canHandleClick: PropTypes.bool,
  params: PropTypes.object
}

Countdown.defaultProps = {
  seconds: 60,
  canHandleClick: true,
  params: {}
}

export default Countdown
