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
  <div className="row login-box">
    <div className="col-lg-12 text-center">
      <img src="/assets/logo/logo.png" className="kokoro-logo" alt="kokoro logo" />
    </div>

    <div className="col-lg-12 text-center">
      <h1>
        Welcome To <span className="blue-text">Kokoro</span> Admin Manager
      </h1>

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
  </div>
)

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errorMessage: PropTypes.string,
  handleFormSubmit: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeEmail: PropTypes.func,
}

export default Login
