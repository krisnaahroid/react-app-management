import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/header/Header'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'

class App extends React.PureComponent {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Header />
      )
    } else {
      return ''
    }
  }

  render() {
    return (
      <Container>
        {this.renderLinks()}

        {this.props.children}
      </Container>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  authenticated: PropTypes.bool,
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(App)
