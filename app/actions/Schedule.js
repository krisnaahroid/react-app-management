import { httpGet } from 'utils/API'
import _ from 'lodash'

import {
  FETCH_SCHEDULES,
} from 'constants/ActionTypes'

function reviver(response) {
  _.forEach(response, (value) => {
    _.forEach(value, (val, key) => {
      if (key === 'start') {
        const newDate = new Date(val)
        _.update(value, 'start', newDate)
      }

      if (key === 'end') {
        const newDate = new Date(val)
        _.update(value, 'end', newDate)
      }
    })
  })

  return response
}

export const fetchSchedules = () => async (dispatch) => {
  const response = await httpGet(dispatch, 'schedules', true)

  dispatch({ type: FETCH_SCHEDULES, payload: { data: reviver(response.data) } })
}
