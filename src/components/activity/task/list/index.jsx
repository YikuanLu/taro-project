import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text, Image, RichText } from '@tarojs/components'

import { timeDuration } from '@/assets/js/publicFn'

import iconUrl from '@/assets/img/activity/rw_icon1.png'

import register from '@/assets/img/activity/rw_zc.png'
import login from '@/assets/img/activity/rw_xz.png'
import read from '@/assets/img/activity/rw_yd.png'
import view from '@/assets/img/activity/rw_gk.png'
import share from '@/assets/img/activity/rw_fx.png'

import { getUserTaskInfo } from '@/api/user'
import moment from 'moment'

import style from './TaskList.module.scss'

const urlMap = {
  register,
  login,
  read,
  view,
  share
}

const TaskList = () => {
  const [remainderTime, setRemainder] = useState('获取中')
  const [userTasks, setUserTasks] = useState([])

  useEffect(() => {
    getUserTaskInfo().then((res) => {
      const { createdTime, newbieTasks } = res
      setUserTasks(newbieTasks)
      const endTime = moment(createdTime).add(30, 'days')
      let now = moment()
      let distance = endTime.diff(now)
      let showTime = `还剩${timeDuration(distance)}`
      setRemainder(showTime)

      let timer = setInterval(() => {
        now = moment()
        distance = endTime.diff(now)
        showTime = `还剩${timeDuration(distance)}`
        setRemainder(showTime)
        return timer
      }, 1000)

      return () => {
        console.log(111)
        timer = null
      }
    })
  }, [])

  return (
    <View className={style.taskList}>
      <View className={style.showTask}>
        <View className={style.header}>
          <View className={style.title}>
            <Image className={style.img} src={iconUrl} />
            <Text>新手任务</Text>
          </View>
          <View className={style.time}>{remainderTime}</View>
        </View>
        <View className={style.listContent}>
          {userTasks.map((item) => {
            const { done } = item
            return (
              <View key={item.title} className={style.item}>
                <View className={style.main}>
                  <Image className={style.img} src={urlMap[item.eventType]} />
                  <View className={style.textBox}>
                    <RichText nodes={item.title} className={style.itemTitle} />
                    <View className={style.desc}>{item.desc}</View>
                  </View>
                </View>
                <View
                  style={{
                    borderColor: !done ? '#3F8FFD' : null,
                    color: !done ? '#3F8FFD' : null
                  }}
                  className={style.btn}
                  onClick={() => {
                    if (done) return
                    Taro.navigateTo({ url: '/pages/appDownload/index' })
                  }}
                >
                  {done ? '已完成' : '去完成'}
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default TaskList
