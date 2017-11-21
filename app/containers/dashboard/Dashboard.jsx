import React from 'react'
import { dashboardPropTypes } from 'utils/prop_type/Dashboard'
import { connect } from 'react-redux'
import { logoutUser } from 'actions/Auth'

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <br />
            Hallo {this.props.user.email}
            <br /><br />
            <button onClick={() => {
              this.props.logoutUser()
            }}
            >Sign out
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = dashboardPropTypes

const mapStateToProps = state => ({
  user: state.auth.user,
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
