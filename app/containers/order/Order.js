import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchOrder, fetchTherapists, assignTherapist } from 'actions/Order'
import OrderView from 'components/order/Order'

export function mapStateToProps(state) {
  return {
    orders: state.order.orders,
    therapists: state.orderTherapist.items,
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
  lifecycle({
    componentDidMount() {
      this.props.fetchOrder()
      this.props.fetchTherapists()
    },
  }),
  withHandlers({
    toggle: props => (bookingCode) => {
      props.fetchTherapists()
      props.setBookingCode(bookingCode)
      props.setModal(!props.showModal)
    },
    postAssignTherapist: props => (bookingCode, therapistId) => {
      props.assignTherapist(bookingCode, therapistId)
      props.fetchOrder()
      props.setModal(!props.showModal)
    },
  }),
)(OrderView)
