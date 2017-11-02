import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from 'actions/Auth'

class Logout extends React.PureComponent {
  componentWillMount() {
    this.props.logoutUser()
  }

  render() {
    return (
      <div>Sorry to see you go ...</div>
    )
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func,
}

export default connect(null, { logoutUser })(Logout)
