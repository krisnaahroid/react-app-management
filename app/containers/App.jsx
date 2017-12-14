import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router'
import MainView from 'components/Main'

export function mapStateToProps(state) {
  const {
    authenticated,
  } = state.auth

  return { authenticated }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(MainView)
