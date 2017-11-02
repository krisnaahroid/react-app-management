import React from 'react'
import { dashboardPropTypes } from 'utils/prop_type/Dashboard'
import { connect } from 'react-redux'

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        Hallo {this.props.user.email}
      </div>
    )
  }
}

Dashboard.propTypes = dashboardPropTypes

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps)(Dashboard)
