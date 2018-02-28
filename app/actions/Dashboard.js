import { httpGet } from 'utils/API'

import { FETCH_DASHBOARD_REQUEST } from 'constants/ActionTypes'

export const fetchStats = () => async (dispatch) => {
  const response = await httpGet(dispatch, 'stats', true)

  dispatch({ type: FETCH_DASHBOARD_REQUEST, payload: response.data })
}
