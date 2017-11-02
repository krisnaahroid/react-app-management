import PropTypes from 'prop-types'

const avatarShape = PropTypes.shape({
  url: PropTypes.string,
})

export const dashboardPropTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      big: avatarShape,
      small: avatarShape,
      thumb: avatarShape,
      url: PropTypes.string,
    }),
    email: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    phone_number: PropTypes.string,
    rating: PropTypes.number,
    wallet: PropTypes.string,
  }),
}
