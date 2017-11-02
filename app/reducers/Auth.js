import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SET_CURRENT_USER,
} from 'constants/ActionTypes'

const initialState = {
  authenticated: false,
  user: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state, error: '', authenticated: true, user: (action.payload || {}),
      }
    case SET_CURRENT_USER:
      return {
        ...state, error: '', authenticated: true, user: action.payload.attributes,
      }
    case UNAUTH_USER:
      return { ...state, authenticated: false, user: {} }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
