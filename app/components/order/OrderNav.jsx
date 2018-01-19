import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const OrderNav = ({ activeOrder, activeOrderHistory }) => (
  <div className="order-nav">
    <div className={`link-order ${activeOrder}`}>
      <Link to="/order"><h1>Order</h1></Link>
    </div>
    <div className={`link-order-history ${activeOrderHistory}`}>
      <Link to="/order/history"><h1>Order History</h1></Link>
    </div>
  </div>
)

OrderNav.propTypes = {
  activeOrder: PropTypes.string,
  activeOrderHistory: PropTypes.string,
}

export default OrderNav
