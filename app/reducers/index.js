import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as authReducer } from './Auth'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
})

export default rootReducer
