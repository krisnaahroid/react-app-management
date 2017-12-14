import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withHandlers, lifecycle } from 'recompose'
import { logoutUser, setCurrentUser } from 'actions/Auth'
import UserNavigationView from 'components/header/UserNavigation'

export function mapStateToProps(state) {
  const { user } = state.auth

  return { user }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: bindActionCreators(logoutUser, dispatch),
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    logout: props => () => {
      props.logoutUser()
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.setCurrentUser()
    },
  }),
)(UserNavigationView)
