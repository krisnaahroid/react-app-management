import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as authReducer } from './Auth'
import { reducer as therapistReducer } from './Therapist'
import { reducer as dashboardReducer } from './Dashboard'
import { reducer as orderHistoryReducer } from './OrderHistory'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  therapist: therapistReducer,
  dashboard: dashboardReducer,
  orderHistory: orderHistoryReducer,
})

export default rootReducer
