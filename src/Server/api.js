import axios from 'axios'
import {MessageBox, Toast, Indicator} from 'mint-ui'

axios.defaults.timeout = 5000 // 默认请求超时时间
// axios.defaults.headers = '请求头'
axios.defaults.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' }

export function getHttp (url, params = {}) {
  // 创建动画mint-ui
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
      Indicator.close() // // 关闭动画
    }).catch(err => {
      reject(err)
      Indicator.close() // // 关闭动画
      MessageBox.alert('message', err)
    })
  })
}

export function postHttp (url, data = {}) {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      if (response.data.status === 1) {
        resolve(response.data)
      } else {
        Toast(response.data.msg)
      }
      Indicator.close() // 关闭动画
    }, (err) => {
      reject(err)
      Indicator.close()
    })
  })
}
