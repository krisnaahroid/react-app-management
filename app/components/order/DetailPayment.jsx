import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'components/strap'


const DetailPaymentModal = ({
  showModal, toggle,
}) => (
  <Modal className="detail-payment" size="lg" isOpen={showModal} toggle={toggle}>
    <ModalHeader className="detail-payment--header" toggle={toggle}>Detail Payment</ModalHeader>
    <ModalBody className="detail-payment--body container">
      <div className="col-md-12">
        No. Invoice:
        <span>87732133</span>
      </div>
      <div className="col-md-12">
        No. Invoice:
        <span>87732133</span>
      </div>
      <div className="col-md-12">
          No. Invoice:
        <span>87732133</span>
      </div>
      <div className="col-md-12">
          No. Invoice:
        <span>87732133</span>
      </div>
    </ModalBody>
  </Modal>
)

DetailPaymentModal.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
}

export default DetailPaymentModal
