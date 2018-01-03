import axios from 'axios'
import { CookieStorage } from 'cookie-storage'
import { POST, PUT, GET, DELETE } from 'constants/ActionTypes'

const API_URL = process.env.APP_CONFIG.api_url
const NAME_SPACE = 'admin'
const cookieStorage = new CookieStorage()

const httpRequest = async (dispatch, requestType = GET, opts = {}) => {
  try {
    // TODO: Create reducers for pre loading
    // dispatch({
    //   type: REQUEST,
    //   meta: { status: PENDING },
    // })

    const reqArgs = [`${API_URL}/${NAME_SPACE}/${opts.endpoint || ''}`]

    if (requestType === POST || requestType === PUT) {
      reqArgs.push(opts.data || {})
    }

    reqArgs.push(opts.requiresAuth ? { headers: { Authorization: cookieStorage.getItem('token'), 'Content-Type': 'application/json', Accept: 'application/vnd.kokoro.v1+json' } } : {})

    const response = await axios[requestType](...reqArgs)

    // TODO: Create reducers for after loading
    // dispatch({
    //   type: REQUEST,
    //   meta: { status: SUCCESS },
    //   payload: response.data,
    // })

    return Promise.resolve(response.data)
  } catch (err) {
    throw err
  }
}


export const httpPost = (dispatch, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, POST, { endpoint, data, requiresAuth })

export const httpPut = async (dispatch, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, PUT, { endpoint, data, requiresAuth })

export const httpGet = async (dispatch, endpoint, requiresAuth) =>
  httpRequest(dispatch, GET, { endpoint, requiresAuth })

export const httpDel = async (dispatch, endpoint, requiresAuth) =>
  httpRequest(dispatch, DELETE, { endpoint, requiresAuth })
