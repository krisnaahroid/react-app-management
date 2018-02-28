import { FETCH_THERAPIST_REQUEST } from 'constants/ActionTypes'

const initialState = {
  items: [],
  meta: {},
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THERAPIST_REQUEST:
      return {
        ...state, items: action.payload.data, meta: action.payload.meta,
      }
    default:
      return state
  }
}
