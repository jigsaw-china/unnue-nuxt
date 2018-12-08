import moment from 'moment'

moment.locale('zh-cn'); // 使用中文

export function relativeTime(date) {
  return moment(date).format('YY-MM-DD h:mm:ss a dddd')
}
export function ago(date) {
  return  moment(date).fromNow()
}
