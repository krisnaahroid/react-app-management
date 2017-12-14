import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import UserNavigationView from 'components/header/UserNavigation'
import { logoutUser } from 'actions/Auth'

export function mapStateToProps(state) {
  const user = state.auth.user  
  
  return { user }
}

export default compose(
  connect(
    mapStateToProps,
    { logoutUser }
  ),
  withHandlers({
    logout: props => () => {
      props.logoutUser()
    }
  })
)(UserNavigationView)
