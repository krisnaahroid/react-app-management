import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchSchedules } from 'actions/Schedule'
import ScheduleView from 'components/schedule/Schedule'

export function mapStateToProps(state) {
  return {
    events: state.schedule.events,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSchedules: bindActionCreators(fetchSchedules, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchSchedules()
    },
  }),
)(ScheduleView)
