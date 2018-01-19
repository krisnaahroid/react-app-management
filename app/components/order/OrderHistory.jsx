import PropTypes from 'prop-types'
import { Table, Badge, Pagination } from 'components/strap'

const showAvatar = (image) => {
  if (image.small_url) {
    return (
      <img src={image.small_url} className="avatar" alt="" />
    )
  }

  return (<img src="/assets/avatar_no_image.png" className="avatar" alt="" />)
}

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

const OrderHistory = ({
  orders, totalCount, currentPage, getMoreList,
}) => (
  <div>
    <Table className="kokoro-table order-history">
      <thead>
        <tr>
          <th width="300px">Order Detail</th>
          <th>Service</th>
          <th>Date & Time</th>
          <th>Therapist</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((item, i) => (
            <tr key={i}>
              <td>
                <div className="text-bold-booking">{item.attributes.name}</div><br />
                Phone: {item.attributes.phone_number} <br />
                Address: {item.attributes.address}
              </td>
              <td>
                <div className="text-bold-booking">{item.attributes.service_massage}</div><br />
                {item.attributes.therapist_preference} Therapist Preference<br />
                Duration {item.attributes.service_duration} Minutes <br />
                Total Price: {item.attributes.gross_amount} <br />
                <a href="#">Detail Payment</a>
              </td>
              <td>
                {item.attributes.order_time} <br />
                {item.attributes.order_date}
              </td>
              <td>
                {showAvatar(item.attributes.therapist.avatar)} <br />
                {item.attributes.therapist.name} <br />
                ({item.attributes.therapist.gender})
              </td>
              <td>
                <div className="text-bold-booking">{showStatus(item.attributes.status)}</div>
                {item.attributes.order_time_completed} <br />
                {item.attributes.order_date_completed}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>

    <Pagination
      className="justify-content-center"
      dataSize={totalCount}
      itemsPerPage={8}
      onPageChange={getMoreList}
      currentPage={currentPage}
    />
  </div>
)

OrderHistory.propTypes = {
  orders: PropTypes.array,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  getMoreList: PropTypes.func,
}

export default OrderHistory
