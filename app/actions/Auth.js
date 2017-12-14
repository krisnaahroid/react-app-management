import History from 'app/history'
import { httpPost, httpGet } from 'utils/API'

import {
  AUTH_USER,
  SET_CURRENT_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from 'constants/ActionTypes'

export const authError = error => ({
  type: AUTH_ERROR,
  payload: error,
})

export const loginUser = ({ email, password }) => async (dispatch) => {
  const response = await httpPost(dispatch, 'login', { email, password }, false)

  if (response.meta.status) {
    sessionStorage.setItem('token', response.data.token)
    dispatch({ type: AUTH_USER })

    History.push('/')
  } else {
    dispatch(authError(response.meta.message))
  }
}

export const setCurrentUser = () => async (dispatch) => {
  const response = await httpGet(dispatch, 'current_user', {}, true)

  dispatch({ type: SET_CURRENT_USER, payload: response.data })
}

export const logoutUser = () => {
  sessionStorage.removeItem('token')

  return { type: UNAUTH_USER }
}
