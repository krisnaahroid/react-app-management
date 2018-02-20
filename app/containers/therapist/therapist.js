import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withState, lifecycle, withHandlers } from 'recompose'
import { fetchTherapist } from 'actions/Therapist'
import DataTherapistView from 'components/therapist/DataTherapist'

export function mapStateToProps(state) {
  return {
    therapists: state.therapist.items,
    totalCount: state.therapist.meta.total_count,
    statOrder: state.dashboard.order,
    statIncome: state.dashboard.income,
    statPendingOrder: state.dashboard.pending_order,
    dataChart: state.dashboard.chart,
    roles: state.roles.roles,
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
  withState('currentPage', 'setCurrentPage', 0),
  lifecycle({
    componentDidMount() {
      this.props.fetchTherapist(this.props.currentPage)
    },
  }),
  withHandlers({
    getMoreList: props => (event, index) => {
      props.fetchTherapist(index + 1)
      props.setCurrentPage(index)
    },
  }),
)(DataTherapistView)
