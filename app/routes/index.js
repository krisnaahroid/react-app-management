import React from 'react'
import { Route } from 'react-router-dom'

import App from 'containers/App'
import Login from 'containers/auth/Login'
import Logout from 'containers/auth/Logout'
import Dashboard from 'containers/dashboard/Dashboard'
import RequireAuth from 'components/auth/RequireAuth'

const Routes = () => (
  <App>
    <Route exact path="/" component={RequireAuth(Dashboard)} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </App>
)

export default Routes
