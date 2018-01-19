import PropTypes from 'prop-types'

const therapistAvatar = (therapist) => {
  if (therapist) {
    if (therapist.avatar.small_url) {
      return (
        <img src={therapist.avatar.small_url} className="avatar" alt="" />
      )
    }
    return (<img src="/assets/avatar_no_image.png" className="avatar" alt="" />)
  }

  return 'No Therapist.'
}

const therapistName = (therapist) => {
  if (therapist) {
    return therapist.name
  }

  return null
}

const therapistGender = (therapist) => {
  if (therapist) {
    return `(${therapist.gender})`
  }

  return null
}

const OrderTherapist = ({ therapist }) => (
  <div>
    {therapistAvatar(therapist)} <br />
    {therapistName(therapist)} <br />
    {therapistGender(therapist)}
  </div>
)

OrderTherapist.propTypes = {
  therapist: PropTypes.object,
}

export default OrderTherapist
