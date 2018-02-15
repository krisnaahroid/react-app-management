import { httPost } from 'utils/API'
import { FETCH_FEEDBACK_REQUEST } from 'constants/ActionTypes'

export const fetchFeedback = page => async (dispatch) => {
  const response = await httPost(dispatch, 'user/feedback', { page }, true)
  dispatch({ type: FETCH_FEEDBACK_REQUEST, payload: { data: response.data, meta: response.meta } })
}
