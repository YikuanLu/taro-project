import Taro, { useRef, useEffect } from '@tarojs/taro'
import { View, Canvas } from '@tarojs/components'

import { mainColor, subColor } from '@/assets/js/types'
import style from './Style.module.scss'

const WinRateCircle = ({ data = {}, role = 'blue' }) => {
  const curTeam = data
  const percent = curTeam.winRate

  const canvasRef = useRef()
  const lineWidth = 8
  const unit = Math.PI
  const radius = 40
  const origin = radius + lineWidth
  // canvas画进度条
  function drawH5(railColor, progressColor) {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    if (window.devicePixelRatio) {
      // 防锯齿
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      canvas.height = height * window.devicePixelRatio
      canvas.width = width * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    } else {
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }
    //轨道
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = railColor
    ctx.arc(origin, origin, radius, 0 * unit, 2 * unit, false)
    ctx.stroke()
    // 进度条
    let current = 1.5
    const end = current + (percent / 100) * 2
    const animate = () => {
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = progressColor
      ctx.arc(origin, origin, radius, 1.5 * unit, current * unit, false)
      ctx.stroke()
      current += 0.05
      current < end && setTimeout(animate, 10)
    }
    animate()
  }

  function drawMp(railColor, progressColor) {
    const canvas = Taro.createCanvasContext('canvas')
    const ctx = canvas
    const width = canvas.width
    const height = canvas.height
    if (window.devicePixelRatio) {
      // 防锯齿
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      canvas.height = height * window.devicePixelRatio
      canvas.width = width * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    } else {
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }
    //轨道
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = railColor
    ctx.arc(origin, origin, radius, 0 * unit, 2 * unit, false)
    ctx.stroke()
    ctx.draw()
    // 进度条
    let current = 1.5
    const end = current + (percent / 100) * 2
    const animate = () => {
      ctx.beginPath()
      ctx.lineWidth = lineWidth
      ctx.strokeStyle = progressColor
      ctx.arc(origin, origin, radius, 1.5 * unit, current * unit, false)
      ctx.stroke()
      ctx.draw()
      current += 0.05
      current < end && setTimeout(animate, 10)
    }
    animate()
  }

  useEffect(() => {
    if (process.env.TARO_ENV === 'h5') {
      canvasRef.current && drawH5(subColor[role], mainColor[role])
    } else {
      drawMp(subColor[role], mainColor[role])
    }
  }, [canvasRef.current])

  return (
    <View className={style.winRate}>
      {process.env.TARO_ENV === 'h5' ? (
        <canvas ref={canvasRef} width="96" height="96"></canvas>
      ) : (
        <Canvas canvasId="canvas" width="96" height="96"></Canvas>
      )}
      <View className={style.rate}>
        <View
          className={style.value}
          style={{
            color: mainColor[role]
          }}
        >
          {curTeam.winRate}%
        </View>
        <View className={style.key}>胜率</View>
      </View>
      <View className={style.text}>
        {curTeam.winTimes}胜{curTeam.loseTimes}负
      </View>
    </View>
  )
}

export default WinRateCircle
