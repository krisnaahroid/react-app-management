import PropTypes from 'prop-types'
import { Button, Row, Col, Form, FormGroup, Input } from 'reactstrap'

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
  <Row className="login-box">
    <Col xs="12" sm="12" md="6" lg="6" xl="6">
      <img src="/assets/logo/logo.png" className="kokoro-logo" alt="kokoro logo" />
      <h1>
        Welcome to <br /> <span className="blue-text">Kokoro</span> <br /> Admin Manager
      </h1>
    </Col>
    <Col xs="12" sm="12" md="6" lg="6" xl="6">
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Input type="email" name="email" id="email" value={email} onChange={onChangeEmail} placeholder="Username"  />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" value={password} onChange={onChangePassword} placeholder="Password" />
        </FormGroup>
        {showErrorMessage(errorMessage)}
        <Button type="submit" className="btn btn-primary">LOGIN</Button>
      </Form>
    </Col>
  </Row>
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
