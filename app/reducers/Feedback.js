import { FETCH_FEEDBACK_REQUEST } from 'constants/ActionTypes'

const initialState = {
  oreder: [],
  meta: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACK_REQUEST:
      return {
        ...state, orders: action.payload.data, meta: action.payload.meta,
      }
    default:
      return state
  }
}
