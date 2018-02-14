import jwtDecode from 'jwt-decode'

import {
  AUTH_ROLES,
} from 'constants/ActionTypes'

const initialState = {
  roles: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ROLES:
      return {
        ...state, roles: jwtDecode(action.payload).roles,
      }
    default:
      return state
  }
}
