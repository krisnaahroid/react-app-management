import PropTypes from 'prop-types'
import { Table, Avatar } from 'components/strap'
import { startCase } from 'lodash'
import StarRatingComponent from 'react-star-rating-component'

const TherapistTableListView = ({ therapists }) => (
  <div className="therapist-view-table">
    <Table className="kokoro-table">
      <thead>
        <tr>
          <th className="text-left">Therapist</th>
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
                <Avatar image={item.attributes.avatar} />
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

TherapistTableListView.propTypes = {
  therapists: PropTypes.array.isRequired,
}

export default TherapistTableListView
