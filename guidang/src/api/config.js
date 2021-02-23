import axios from 'axios'
import { Message } from 'element-ui'
import '../../theme/index.css'
// import 'element-ui/lib/theme-chalk/index.css'
import { Indicator, Toast } from 'mint-ui'
axios.defaults.timeout = 30000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
let baseURL = location.origin;
// let baseURL = ''
// if (location.host == 'xfkkabus.ckhlw.cn') {
//   baseURL = 'https://xfkkabus.ckhlw.cn'
// } else if (location.host == 'kabusxiaofankatest.9fbank.com') {
//   baseURL = 'http://kabusxiaofankatest.9fbank.com'
// } else if (location.host == 'kabusxiaofankapre.9fbank.com') {
//   baseURL = 'http://kabusxiaofankapre.9fbank.com'
// } else if (location.host == 'xfkkabus.xfanka.com') {
//   baseURL = 'https://xfkkabus.xfanka.com'
// } else {
//   //baseURL = 'http://10.203.14.150:8091'
//   baseURL = 'http://127.0.0.1:9090'
// }
//请求拦截
axios.interceptors.request.use((config)=>{
  Indicator.open({spinnerType: 'triple-bounce'})
  config.baseURL =  config.baseURL || baseURL;
  return config
})

axios.interceptors.response.use((response) => {
  Indicator.close()
  if (response.data.code != 0) {
    // Toast(response.data.msg)
    Message({
      message: response.data.msg,
      type: 'error'
    });
  }
  return response
})

export function fetch(url, params,type) {
  return new Promise((resolve, reject) => {
    if(type==='post'){
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    } else if(type==='get'){
      axios.get(url,{params})
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    }else{
      resolve(baseURL + url);
    }
  })
}

