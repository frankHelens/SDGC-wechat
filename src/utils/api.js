/* globals localStorage */
import axios from 'axios'
import dayjs from 'dayjs'
// import md5 from 'md5'
import { API } from './common'
axios.defaults.baseURL = API
axios.defaults.headers.common['Gddx-Access-AppId'] = 'web'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'

// function signFormat (props) {
//   return md5(Object.keys(props).map(el => (el + '=' + props[el]).toLowerCase()).sort().join('&') + localStorage.token)
// }

// export function httpHeader (props, timeStamp) {
//   let sign = {
//     'Gddx-Access-Token': localStorage.token,
//     'Gddx-Access-Version': '0.1.0'
//   }
//   return {
//     ...props.headers,
//     'Gddx-Access-Sign': signFormat({
//       ...sign,
//       ...props.params,
//       ...props.data,
//       'Gddx-Access-TimeStamp': timeStamp
//     }),
//     'Gddx-Access-TimeStamp': timeStamp,
//     'Gddx-Access-Token': sign['Gddx-Access-Token'],
//     'Gddx-Access-Version': sign['Gddx-Access-Version']
//   }
// }

export function fetch (props) {
  const timeStamp = dayjs().format('x')
  return axios({
    ...props,
    // headers: httpHeader(props, timeStamp),
    params: {
      ...props.params,
      timeStamp: timeStamp
    }
  }).then((response) => {
    if (response) {
      if (response.data.code === 0) {
        return response.data.data || response.data
      } else if (response.data.code === 6) {
        alert(response.data.data.map(item => {
          return `${item.code}:${item.message}`
        }).join('\n\r'))
        return false
      } else {
        throw Object({
          response: {
            status: response.data.code,
            statusText: response.data.message
          }
        })
      }
    }
  }).catch(({ response }) => {
    if (response) {
      const { status, statusText } = response
      if (status === 401 || status === 403) {
        window.location.href = '/#/login'
      } else {
        alert(status + ':' + statusText)
      }
    }
    return false
  })
}

export const httpGet = ({ url, params }) => {
  return fetch({
    method: 'get',
    url,
    params
  })
}

export const httpPost = ({ url, data }) => {
  return fetch({
    method: 'post',
    url,
    data
  })
}

export const httpPut = ({ url, data }) => {
  return fetch({
    method: 'put',
    url,
    data
  })
}

export const httpPatch = ({ url, data }) => {
  return fetch({
    method: 'patch',
    url,
    data
  })
}

export const httpDelete = ({ url }) => {
  return fetch({
    method: 'delete',
    url
  })
}

export const fetchAll = ({ requests = [] }) => {
  return axios.all(
    requests
  ).then((response) => {
    return response
  })
}

const api = {
  install (Vue, options) {
    Vue.prototype.$fetch = fetch
    Vue.prototype.$fetchAll = fetchAll
    Vue.prototype.$get = httpGet
    Vue.prototype.$post = httpPost
    Vue.prototype.$patch = httpPatch
    Vue.prototype.$put = httpPut
    Vue.prototype.$httpDelete = httpDelete
  }
}

export default api
