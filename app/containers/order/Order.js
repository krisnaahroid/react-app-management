import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchOrder, fetchTherapists, assignTherapist } from 'actions/Order'
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
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('showModal', 'setModal', false),
  withState('bookingCode', 'setBookingCode', ''),
  withState('currentPage', 'setCurrentPage', 0),
  lifecycle({
    componentDidMount() {
      this.props.fetchOrder(this.props.currentPage)
      this.props.fetchTherapists()
    },
  }),
  withHandlers({
    getMoreList: props => (event, index) => {
      props.fetchOrder(index + 1)
      props.setCurrentPage(index)
    },
    toggle: props => (bookingCode) => {
      props.fetchTherapists()
      props.setBookingCode(bookingCode)
      props.setModal(!props.showModal)
    },
    postAssignTherapist: props => (bookingCode, therapistId) => {
      props.assignTherapist(bookingCode, therapistId)
      props.fetchOrder(props.currentPage)
      props.setModal(!props.showModal)
    },
  }),
)(OrderView)
