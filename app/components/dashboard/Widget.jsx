import PropTypes from 'prop-types'

const Widget = ({ order, income, pendingOrder }) => (
  <div className="top-widget-container">
    <div className="widget-item">
      <h1>{order}</h1> Order
    </div>

    <div className="widget-item">
      <h1>{income}</h1> Income
    </div>

    <div className="widget-item">
      <h1>{pendingOrder}</h1> Pending/Cancel Order
    </div>
  </div>
)

Widget.propTypes = {
  order: PropTypes.number,
  income: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pendingOrder: PropTypes.number,
}

export default Widget
