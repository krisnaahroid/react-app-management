import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as authReducer } from './Auth'
import { reducer as therapistReducer } from './Therapist'
import { reducer as dashboardReducer } from './Dashboard'
import { reducer as orderHistoryReducer } from './OrderHistory'
import { reducer as orderReducer } from './Order'
import { reducer as assignTherapistReducer } from './AssignTherapist'
import { reducer as orderTherapistReducer } from './OrderTherapist'
import { reducer as scheduleReducer } from './Schedule'
import { reducer as rolesReducer } from './Roles'
import { reducer as feedbackReducer } from './Feedback'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  therapist: therapistReducer,
  orderTherapist: orderTherapistReducer,
  dashboard: dashboardReducer,
  orderHistory: orderHistoryReducer,
  order: orderReducer,
  schedule: scheduleReducer,
  assignTherapist: assignTherapistReducer,
<<<<<<< bc7e3ec2b19ff40490bb6fc714c2a43021004f4d
  roles: rolesReducer,
=======
  feedback: feedbackReducer,
>>>>>>> add customer feedback component
})

export default rootReducer
