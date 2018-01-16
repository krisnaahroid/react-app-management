import PropTypes from 'prop-types'
import { Table } from 'components/strap'
import { startCase } from 'lodash'
import StarRatingComponent from 'react-star-rating-component'

const showAvatar = (image) => {
  if (image.small_url) {
    return (
      <img src={image.small_url} className="avatar" alt="" />
    )
  }

  return (<img src="/assets/avatar_no_image.png" className="avatar" alt="" />)
}

const TherapistsView = ({ therapists }) => (
  <div className="therapist-view-table">
    <h1>Therapist</h1>

    <Table className="kokoro-table">
      <thead>
        <tr>
          <th />
          <th>Order</th>
          <th>Ratings</th>
          <th>Income</th>
          <th>Duration</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {
          therapists.map((item, i) => (
            <tr key={i}>
              <td className="therapist">
                {showAvatar(item.attributes.avatar)}
                {item.attributes.name}
              </td>
              <td>{item.attributes.order}</td>
              <td>
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={item.attributes.rating} />
              </td>
              <td>{item.attributes.income}</td>
              <td>{item.attributes.duration}</td>
              <td>{startCase(item.attributes.gender)}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  </div>
)

TherapistsView.propTypes = {
  therapists: PropTypes.array.isRequired,
}

export default TherapistsView
