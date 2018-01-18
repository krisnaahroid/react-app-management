import { httpPost } from 'utils/API'

import {
  FETCH_THERAPIST_REQUEST,
} from 'constants/ActionTypes'

export const fetchTherapist = page => async (dispatch) => {
  const response = await httpPost(dispatch, 'user/therapists', { page }, true)

  dispatch({ type: FETCH_THERAPIST_REQUEST, payload: { data: response.data, meta: response.meta } })
}
