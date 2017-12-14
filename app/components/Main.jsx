import PropTypes from 'prop-types'
import { Container } from 'components/strap'
import Header from 'containers/header/Header'

const showHeader = (authenticated) => {
  if (authenticated) {
    return (
      <Header />
    )
  }

  return null
}

const Main = ({ children, authenticated }) => (
  <Container>
    { showHeader(authenticated) }
    { children }
  </Container>
)

Main.propTypes = {
  children: PropTypes.node,
  authenticated: PropTypes.bool,
}

export default Main
