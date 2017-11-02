import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { loginUser } from 'actions/Auth'
import { connect } from 'react-redux'

class Login extends React.PureComponent {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <p>Oops! {this.props.errorMessage}</p>
        </div>
      )
    }

    return (
      <div />
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <img src="/assets/logo/logo.png" alt="kokoro logo" />

        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <fieldset className="form-group">
            <label>Email:</label>
            <Field className="form-control" name="email" component="input" type="text" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password:</label>
            <Field className="form-control" name="password" component="input" type="password" />
          </fieldset>

          {this.renderError()}

          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string,
}

const mapStateToProps = state => ({ errorMessage: state.auth.error })

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps, { loginUser })(Login))
