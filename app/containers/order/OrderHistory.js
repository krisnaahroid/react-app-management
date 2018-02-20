import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchOrderHistory } from 'actions/Order'
import OrderHistoryView from 'components/order/OrderHistory'

export function mapStateToProps(state) {
  return {
    orders: state.orderHistory.orders,
    totalCount: state.orderHistory.meta.total_count,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrderHistory: bindActionCreators(fetchOrderHistory, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState('currentPage', 'setCurrentPage', 0),
  withState('showModal1', 'setModal1', false),
  lifecycle({
    componentDidMount() {
      this.props.fetchOrderHistory(this.props.currentPage)
    },
  }),
  withHandlers({
    getMoreList: props => (event, index) => {
      props.fetchOrderHistory(index + 1)
      props.setCurrentPage(index)
    },
    toggle1: props => () => {
      props.setModal1(!props.showModal1)
    },
  }),
)(OrderHistoryView)
