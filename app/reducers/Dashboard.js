import {
  FETCH_DASHBOARD_REQUEST,
} from 'constants/ActionTypes'

const initialState = {
  order: 0,
  income: 0,
  pending_order: 0,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DASHBOARD_REQUEST:
      return {
        ...state, order: action.payload.order, income: action.payload.income, pending_order: action.payload.pending_order,
      }
    default:
      return state
  }
}
