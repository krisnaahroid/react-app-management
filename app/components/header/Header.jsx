import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.PureComponent {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Sign Out</Link>
        </li>
      )
    }
    return [
      <li className="nav-item" key="login">
        <Link className="nav-link" to="/login">Sign In</Link>
      </li>,
    ]
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <ul className="navbar-nav mr-auto">
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(Header)
