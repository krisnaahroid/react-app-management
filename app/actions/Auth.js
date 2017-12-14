import History from 'app/history'
import { post, get } from 'utils/API'

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
  const response = await post(dispatch, 'login', { email, password }, false)

  if (response.meta.status) {
    dispatch({ type: AUTH_USER })

    localStorage.setItem('token', response.data.token)
    History.push('/')
  } else {
    dispatch(authError(response.meta.message))
  }
}

export const setCurrentUser = () => async (dispatch) => {
  const response = await get(dispatch, 'current_user', {}, true)

  if (response.meta.status) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: response.data,
    })
  } else {
    localStorage.removeItem('token')
    dispatch({ type: UNAUTH_USER })
    History.push('/login')
  }
}

export const logoutUser = () => {
  localStorage.removeItem('token')

  return { type: UNAUTH_USER }
}
