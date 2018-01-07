import { httpGet } from 'utils/API'

import {
  FETCH_THERAPIST_REQUEST,
} from 'constants/ActionTypes'

export const fetchTherapist = () => async (dispatch) => {
  const response = await httpGet(dispatch, 'user/therapists', {}, true)

  dispatch({ type: FETCH_THERAPIST_REQUEST, payload: response.data })
}
