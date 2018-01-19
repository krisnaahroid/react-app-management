import React from 'react'
import { Route } from 'react-router-dom'

import App from 'containers/App'
import Login from 'containers/auth/Login'
import Dashboard from 'containers/dashboard/Dashboard'
import OrderHistory from 'containers/order/OrderHistory'
import RequireAuth from 'components/auth/RequireAuth'

const Routes = () => (
  <App>
    <Route exact path="/" component={RequireAuth(Dashboard)} />
    <Route exact path="/order-history" component={RequireAuth(OrderHistory)} />
    <Route exact path="/login" component={Login} />
  </App>
)

export default Routes
