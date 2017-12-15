import PropTypes from 'prop-types'

const showErrorMessage = (errorMessage) => {
  if (errorMessage) {
    return (
      <div className="alert alert-danger">
        Oops! {errorMessage}
      </div>
    )
  }

  return null
}

const Login = ({
  email, password, errorMessage, handleFormSubmit, onChangeEmail, onChangePassword,
}) => (
  <div>
    <img src="/assets/logo/logo.png" alt="kokoro logo" />

    <form onSubmit={handleFormSubmit}>
      <fieldset className="form-group">
        <label>Email:</label>
        <input className="form-control" name="email" type="text" value={email} onChange={onChangeEmail} />
      </fieldset>

      <fieldset className="form-group">
        <label>Password:</label>
        <input className="form-control" name="password" type="password" value={password} onChange={onChangePassword} />
      </fieldset>

      {showErrorMessage(errorMessage)}

      <button action="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
)

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errorMessage: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeEmail: PropTypes.func,
}

export default Login
