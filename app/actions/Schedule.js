import { httpGet } from 'utils/API'
import _ from 'lodash'

import {
  FETCH_SCHEDULES,
} from 'constants/ActionTypes'

function reviver(response) {
  const newReponse = []

  _.forEach(response, (object) => {
    const newData = {}

    _.forEach(object, (val, key) => {
      if (key === 'id') {
        const dataId = { id: val }
        _.merge(newData, dataId)
      }

      if (key === 'title') {
        const dataTitle = { title: val }
        _.merge(newData, dataTitle)
      }

      if (key === 'start') {
        const newDate = new Date(val)
        const dataStart = { start: newDate }
        _.merge(newData, dataStart)
      }

      if (key === 'end') {
        const newDate = new Date(val)
        const dataEnd = { end: newDate }
        _.merge(newData, dataEnd)
      }
    })

    newReponse.push(newData)
  })

  return newReponse
}

export const fetchSchedules = () => async (dispatch) => {
  const response = await httpGet(dispatch, 'schedules', true)

  dispatch({ type: FETCH_SCHEDULES, payload: { data: reviver(response.data) } })
}
