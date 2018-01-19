import PropTypes from 'prop-types'
import { Badge } from 'components/strap'

const showStatus = (status) => {
  let color = 'info'

  if (status === 'PENDING') {
    color = 'danger'
  } else if (status === 'WAITING') {
    color = 'primary'
  } else if (status === 'COMPLETED') {
    color = 'success'
  } else if (status === 'ACTIVE') {
    color = 'warning'
  } else {
    color = 'info'
  }

  return <Badge color={color}>{status}</Badge>
}

const OrderStatus = ({ status }) => (
  showStatus(status)
)

OrderStatus.propTypes = {
  status: PropTypes.string,
}

export default OrderStatus
