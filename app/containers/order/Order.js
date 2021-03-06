import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchOrder, fetchTherapists, assignTherapist, markCompleted } from 'actions/Order'
import OrderView from 'components/order/Order'

export function mapStateToProps(state) {
  return {
    orders: state.order.orders,
    therapists: state.orderTherapist.items,
    totalCount: state.order.meta.total_count,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrder: bindActionCreators(fetchOrder, dispatch),
  fetchTherapists: bindActionCreators(fetchTherapists, dispatch),
  assignTherapist: bindActionCreators(assignTherapist, dispatch),
  markCompleted: bindActionCreators(markCompleted, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('showModal', 'setModal', false),
  withState('showModal1', 'setModal1', false),
  withState('bookingCode', 'setBookingCode', ''),
  withState('currentPage', 'setCurrentPage', 0),
  lifecycle({
    componentDidMount() {
      this.props.fetchOrder(this.props.currentPage)
    },
  }),
  withHandlers({
    getMoreList: props => (event, index) => {
      props.fetchOrder(index + 1)
      props.setCurrentPage(index)
    },
    onComplete: props => (bookingCode) => {
      props.markCompleted(bookingCode)
      props.fetchOrder(props.currentPage)
    },
    toggle: props => (bookingCode) => {
      props.fetchTherapists(bookingCode)
      props.setBookingCode(bookingCode)
      props.setModal(!props.showModal)
    },
    toggle1: props => (bookingCode) => {
      props.fetchTherapists(bookingCode)
      props.setBookingCode(bookingCode)
      props.setModal1(!props.showModal1)
    },
    postAssignTherapist: props => (bookingCode, therapistId) => {
      props.assignTherapist(bookingCode, therapistId)
      props.fetchOrder(props.currentPage)
      props.setModal(!props.showModal)
    },
  }),
)(OrderView)
