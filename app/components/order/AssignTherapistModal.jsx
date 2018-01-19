import PropTypes from 'prop-types'
import { Table, Avatar, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'components/strap'
import { startCase } from 'lodash'
import StarRatingComponent from 'react-star-rating-component'

const showButton = (status, assignTherapist, bookingCode, therapistId) => {
  if (status === 'Available') {
    return <Button color="success" size="sm" onClick={() => assignTherapist(bookingCode, therapistId)}>Assign Therapist</Button>
  }

  return null
}

const rowOpacity = (status) => {
  if (status === 'Available') {
    return null
  }

  return 'in-progress'
}

const AssignTherapistModal = ({
  therapists, showModal, assignTherapist, bookingCode, toggle,
}) => (
  <Modal size="lg" isOpen={showModal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Assign Therapist</ModalHeader>
    <ModalBody>
      <Table className="kokoro-table assign-therapist">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Gender</th>
            <th>Ratings</th>
            <th>Order</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            therapists.map((item, i) => (
              <tr key={i} className={rowOpacity(item.attributes.status_available)}>
                <td>
                  <Avatar image={item.attributes.avatar} />
                </td>
                <td>
                  {item.attributes.name}
                </td>
                <td>{startCase(item.attributes.gender)}</td>
                <td>
                  <StarRatingComponent name="rate2" editing={false} starCount={5} value={item.attributes.rating} />
                </td>
                <td>{item.attributes.order}</td>
                <td>{item.attributes.status_available}</td>
                <td>
                  {showButton(item.attributes.status_available, assignTherapist, bookingCode, item.id)}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={toggle}>Close</Button>
    </ModalFooter>
  </Modal>
)

AssignTherapistModal.propTypes = {
  therapists: PropTypes.array,
  bookingCode: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
  assignTherapist: PropTypes.func,
}

export default AssignTherapistModal
