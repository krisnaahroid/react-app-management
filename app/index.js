import React from 'react'
import 'styles'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { CookieStorage } from 'cookie-storage'

import { AUTH_USER } from 'constants/ActionTypes'
import { setCurrentUser } from 'actions/Auth'
import ReactDOM from 'react-dom'
import History from './history'
import Routes from './routes'

const cookieStorage = new CookieStorage()
const store = configureStore()
const token = cookieStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })
  store.dispatch(setCurrentUser())
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
