import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, withState, lifecycle, withHandlers } from 'recompose'
import { fetchTherapist } from 'actions/Therapist'
import DashboardView from 'components/dashboard/Dashboard'

export function mapStateToProps(state) {
  return {
    therapists: state.therapist.items,
    totalCount: state.therapist.meta.total_count,
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
)(DashboardView)
