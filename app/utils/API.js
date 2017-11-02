import axios from 'axios'
import { POST, PUT, GET, DELETE } from 'constants/ActionTypes'

const API_URL = process.env.APP_CONFIG.api_url

const httpRequest = async (dispatch, requestType = GET, opts = {}) => {
  try {
    // TODO: Create reducers for pre loading
    // dispatch({
    //   type: REQUEST,
    //   meta: { status: PENDING },
    // })

    const reqArgs = [`${API_URL}/${opts.endpoint || ''}`]

    if (requestType === POST || requestType === PUT) {
      reqArgs.push(opts.data || {})
    }

    reqArgs.push(opts.requiresAuth ? { headers: { Authorization: localStorage.getItem('token'), 'Content-Type': 'application/json', Accept: 'application/vnd.kokoro.v1+json' } } : {})

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


export const post = (dispatch, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, POST, { endpoint, data, requiresAuth })

export const put = async (dispatch, endpoint, data, requiresAuth) =>
  httpRequest(dispatch, PUT, { endpoint, data, requiresAuth })

export const get = async (dispatch, endpoint, requiresAuth) =>
  httpRequest(dispatch, GET, { endpoint, requiresAuth })

export const del = async (dispatch, endpoint, requiresAuth) =>
  httpRequest(dispatch, DELETE, { endpoint, requiresAuth })
