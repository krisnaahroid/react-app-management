import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/header/Header'

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Header />
        <br />
        <div className="row">
          <div className="col-md-12">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App
