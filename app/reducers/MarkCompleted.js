import {
  MARK_COMPLETED,
} from 'constants/ActionTypes'

const initialState = {
  errorMessage: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_COMPLETED:
      return {
        ...state, errorMessage: '',
      }
    default:
      return state
  }
}
