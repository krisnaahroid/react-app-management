import PropTypes from 'prop-types'
import { Table, Button, Pagination } from 'components/strap'
import OrderStatus from 'components/order/OrderStatus'
import OrderNav from 'components/order/OrderNav'
import OrderTherapist from 'components/order/OrderTherapist'
import AssignTherapistModal from 'components/order/AssignTherapistModal'

const therapistAssign = (therapist, toggle, bookingCode) => {
  if (therapist) {
    return null
  }

  return <Button color="success" size="sm" onClick={() => toggle(bookingCode)}>Assign Therapist</Button>
}

const orderMarkDownButton = (status, onComplete, bookingCode) => {
  if (status === 'ACTIVE') {
    /* eslint-disable no-alert */
    return <Button color="success" size="sm" onClick={() => { if (window.confirm('Are you sure you wish to mark completed this order?')) onComplete(bookingCode) }}>Mark As Done</Button>
    /* eslint-enable no-alert */
  }

  return null
}

const OrderHistory = ({
  orders, therapists, totalCount, currentPage, getMoreList, showModal, toggle, postAssignTherapist, bookingCode, onComplete,
}) => (
  <div>
    <OrderNav activeOrder="active" />

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
                <OrderTherapist therapist={item.attributes.therapist} />
                {therapistAssign(item.attributes.therapist, toggle, item.attributes.booking_code)}
              </td>
              <td>
                <div className="text-bold-booking"><OrderStatus status={item.attributes.status} /></div>
                {item.attributes.order_time_completed} <br />
                {item.attributes.order_date_completed}
                <div className="mark-completed">
                  {orderMarkDownButton(item.attributes.status, onComplete, item.attributes.booking_code)}
                </div>
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

    <AssignTherapistModal therapists={therapists} showModal={showModal} bookingCode={bookingCode} assignTherapist={postAssignTherapist} toggle={toggle} />
  </div>
)

OrderHistory.propTypes = {
  orders: PropTypes.array,
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  toggle: PropTypes.func,
  therapists: PropTypes.array,
  showModal: PropTypes.bool,
  postAssignTherapist: PropTypes.func,
  getMoreList: PropTypes.func,
  onComplete: PropTypes.func,
  bookingCode: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default OrderHistory
