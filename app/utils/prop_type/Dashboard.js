import PropTypes from 'prop-types'

export const dashboardPropTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      big_url: PropTypes.string,
      small_url: PropTypes.string,
      thumb_url: PropTypes.string,
      url: PropTypes.string,
    }),
    email: PropTypes.string,
    gender: PropTypes.string,
    name: PropTypes.string,
    phone_number: PropTypes.string,
    rating: PropTypes.number,
    wallet: PropTypes.number,
  }),
}
