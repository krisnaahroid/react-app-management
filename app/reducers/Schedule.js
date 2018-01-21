import {
  FETCH_SCHEDULES,
} from 'constants/ActionTypes'

const initialState = {
  events: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULES:
      return {
        ...state, events: action.payload.data,
      }
    default:
      return state
  }
}
