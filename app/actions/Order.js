import { httpPost } from 'utils/API'

import {
  FETCH_ORDER_HISTORY_REQUEST,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_THERAPIST_REQUEST,
  ASSIGN_THERAPIST,
} from 'constants/ActionTypes'

export const fetchOrderHistory = page => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders/history', { page }, true)

  dispatch({ type: FETCH_ORDER_HISTORY_REQUEST, payload: { data: response.data, meta: response.meta } })
}

export const fetchOrder = page => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders', { page }, true)

  dispatch({ type: FETCH_ORDER_REQUEST, payload: { data: response.data, meta: response.meta } })
}

export const fetchTherapists = bookingCode => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders/therapists', { bookingCode }, true)

  dispatch({ type: FETCH_ORDER_THERAPIST_REQUEST, payload: { data: response.data, meta: response.meta } })
}

export const assignTherapist = (bookingCode, therapistId) => async (dispatch) => {
  const response = await httpPost(dispatch, 'orders/assign_therapist', { bookingCode, therapistId }, true)

  dispatch({ type: ASSIGN_THERAPIST, payload: { data: response.data } })
}
