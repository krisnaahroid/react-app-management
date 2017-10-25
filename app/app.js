import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const propTypes = {
  name: PropTypes.string.isRequired,
}

class HelloMessage extends React.PureComponent {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

HelloMessage.propTypes = propTypes

const mountNode = document.getElementById('mount')
ReactDOM.render(<HelloMessage name="World!" />, mountNode)
