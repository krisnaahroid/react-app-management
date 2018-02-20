import PropTypes from 'prop-types'
import { Table, Pagination, NavLink } from 'components/strap'
import OrderStatus from 'components/order/OrderStatus'
import OrderNav from 'components/order/OrderNav'
import OrderTherapist from 'components/order/OrderTherapist'
import DetailPayment from 'components/order/DetailPayment'

const detailButton = (therapist, toggle1, bookingCode) => (
  <NavLink className="linkModal" onClick={() => toggle1(bookingCode)}>Detail Payment</NavLink>
)

const OrderHistory = ({
  orders, totalCount, currentPage, getMoreList, therapists, showModal1, toggle1,
}) => (
  <div>
    <OrderNav activeOrderHistory="active" />

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
                {detailButton(item.attributes.therapist, toggle1, item.attributes.booking_code)}
              </td>
              <td>
                {item.attributes.order_time} <br />
                {item.attributes.order_date}
              </td>
              <td>
                <OrderTherapist therapist={item.attributes.therapist} />
              </td>
              <td>
                <div className="text-bold-booking"><OrderStatus status={item.attributes.status} /></div>
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
    <DetailPayment therapists={therapists} showModal={showModal1} toggle={toggle1} />
  </div>
)

OrderHistory.propTypes = {
  orders: PropTypes.array,
  totalCount: PropTypes.number,
  therapists: PropTypes.array,
  currentPage: PropTypes.number,
  getMoreList: PropTypes.func,
  toggle1: PropTypes.func,
  showModal1: PropTypes.bool,
}

export default OrderHistory
