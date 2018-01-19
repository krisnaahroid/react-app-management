import { httpPost } from 'utils/API'

import {
  FETCH_ORDER_HISTORY_REQUEST,
} from 'constants/ActionTypes'

export const fetchOrderHistory = page => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders/history', { page }, true)

  dispatch({ type: FETCH_ORDER_HISTORY_REQUEST, payload: { data: response.data, meta: response.meta } })
}

export const fetchOrder = page => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders', { page }, true)

  dispatch({ type: FETCH_ORDER_HISTORY_REQUEST, payload: { data: response.data, meta: response.meta } })
}
