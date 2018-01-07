import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  compose,
  withState,
  withHandlers,
} from 'recompose'

import LoginView from 'components/auth/Login'
import { loginUser } from 'actions/Auth'

export function mapStateToProps(state) {
  const {
    error,
  } = state.auth

  return {
    errorMessage: error,
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: bindActionCreators(loginUser, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('email', 'updateEmail', ''),
  withState('password', 'updatePassword', ''),
  withHandlers({
    onChangeEmail: props => (event) => {
      props.updateEmail(event.target.value)
    },
    onChangePassword: props => (event) => {
      props.updatePassword(event.target.value)
    },
    handleFormSubmit: props => (event) => {
      event.preventDefault()
      props.loginUser({ email: props.email, password: props.password })
    },
  }),
)(LoginView)
