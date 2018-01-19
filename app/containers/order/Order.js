import { connect } from 'react-redux'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { bindActionCreators } from 'redux'
import { fetchOrder } from 'actions/Order'
import OrderView from 'components/order/Order'

export function mapStateToProps(state) {
  return {
    orders: state.orderHistory.orders,
    totalCount: state.orderHistory.meta.total_count,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchOrder: bindActionCreators(fetchOrder, dispatch),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
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
  }),
)(OrderView)
