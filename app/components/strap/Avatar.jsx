import PropTypes from 'prop-types'

const propTypes = {
  image: PropTypes.object,
}

export const Avatar = ({ image }) => {
  if (image.small_url) {
    return (
      <img src={image.small_url} className="avatar" alt="" />
    )
  }

  return (<img src="/assets/avatar_no_image.png" className="avatar" alt="" />)
}

Avatar.propTypes = propTypes
