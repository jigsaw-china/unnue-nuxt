import moment from 'moment'

moment.locale('zh-cn'); // 使用中文

export function relativeTime(date) {
  return moment(date).format('YY-MM-DD h:mm:ss a dddd')
}
export function ago(date) {
  return  moment(date).fromNow()
}
export function formatSeconds(ms) {
  const tempTime = moment.duration(ms)
  const minutes = tempTime.minutes()
  const seconds = tempTime.seconds()
  return  `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
}
