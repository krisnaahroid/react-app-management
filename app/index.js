import React from 'react'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { AUTH_USER } from 'constants/ActionTypes'
import { getCurrentUser } from 'actions/Auth'
import ReactDOM from 'react-dom'
import History from './history'
import Routes from './routes'

import 'styles'

const store = configureStore()
const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })
  store.dispatch(getCurrentUser())
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={History}>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </BrowserRouter>
  </Provider>,
  document.getElementById('mount')
)
