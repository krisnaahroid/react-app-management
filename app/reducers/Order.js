import {
  FETCH_ORDER_REQUEST,
} from 'constants/ActionTypes'

const initialState = {
  orders: [],
  meta: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state, orders: action.payload.data, meta: action.payload.meta,
      }
    default:
      return state
  }
}
