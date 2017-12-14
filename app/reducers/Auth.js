import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SET_CURRENT_USER,
} from 'constants/ActionTypes'

const initialState = {
  authenticated: false,
  user: {
    avatar: {
      url: '',
      small_url: '',
      big_url: '',
      thumb_url: '',
    },
  },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state, error: '', authenticated: true,
      }
    case SET_CURRENT_USER:
      return {
        ...state, error: '', user: action.payload.attributes,
      }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
