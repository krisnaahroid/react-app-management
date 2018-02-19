import React from 'react'
import { Route } from 'react-router-dom'

import App from 'containers/App'
import Login from 'containers/auth/Login'
import Dashboard from 'containers/dashboard/Dashboard'
import Order from 'containers/order/Order'
import OrderHistory from 'containers/order/OrderHistory'
import Schedule from 'containers/schedule/Schedule'
import Feedback from 'containers/feedback/Feedback'
import RequireAuth from 'components/auth/RequireAuth'
import DataTherapist from 'components/therapist/DataTherapist'


const Routes = () => (
  <App>
    <Route exact path="/" component={RequireAuth(Dashboard)} />
    <Route exact path="/order" component={RequireAuth(Order)} />
    <Route exact path="/order/history" component={RequireAuth(OrderHistory)} />
    <Route exact path="/schedule" component={RequireAuth(Schedule)} />
    <Route exact path="/feedback" component={RequireAuth(Feedback)} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/therapist" component={RequireAuth(DataTherapist)} />
  </App>
)

export default Routes
