import { ASSIGN_THERAPIST } from 'constants/ActionTypes'

const initialState = {
  errorMessage: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGN_THERAPIST:
      return {
        ...state, errorMessage: '',
      }
    default:
      return state
  }
}
