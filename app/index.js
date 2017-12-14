import React from 'react'
import 'styles'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Router, Switch } from 'react-router-dom'
import { AUTH_USER } from 'constants/ActionTypes'
import { setCurrentUser } from 'actions/Auth'
import ReactDOM from 'react-dom'
import History from './history'
import Routes from './routes'

const store = configureStore()
const token = localStorage.getItem('token')

if (token) {
  store.dispatch(setCurrentUser())
  store.dispatch({ type: AUTH_USER })
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
