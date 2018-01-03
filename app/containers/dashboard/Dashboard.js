import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'
import { fetchTherapist } from 'actions/Therapist'
import DashboardView from 'components/dashboard/Dashboard'

export function mapStateToProps(state) {
  return {
    therapists: state.therapist.items
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTherapist: bindActionCreators(fetchTherapist, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchTherapist()
    },
  }),
)(DashboardView)
