import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as authReducer } from './Auth'
import { reducer as therapistReducer } from './Therapist'
import { reducer as dashboardReducer } from './Dashboard'
import { reducer as orderHistoryReducer } from './OrderHistory'
import { reducer as orderReducer } from './Order'
import { reducer as assignTherapistReducer } from './AssignTherapist'
import { reducer as orderTherapistReducer } from './OrderTherapist'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  therapist: therapistReducer,
  orderTherapist: orderTherapistReducer,
  dashboard: dashboardReducer,
  orderHistory: orderHistoryReducer,
  order: orderReducer,
  assignTherapist: assignTherapistReducer,
})

export default rootReducer
