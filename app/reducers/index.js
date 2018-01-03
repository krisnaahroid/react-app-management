import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as authReducer } from './Auth'
import { reducer as therapistReducer } from './Therapist'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  therapist: therapistReducer,
})

export default rootReducer
