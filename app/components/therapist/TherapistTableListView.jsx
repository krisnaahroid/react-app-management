import PropTypes from 'prop-types'
import { Table, Avatar } from 'components/strap'
import { includes, startCase } from 'lodash'
import StarRatingComponent from 'react-star-rating-component'

const trIncome = (roles) => {
  if (includes(roles, 'super_admin')) {
    return (<th>Income</th>)
  }

  return null
}

const tdIncome = (roles, income) => {
  if (includes(roles, 'super_admin')) {
    return (<td>{income}</td>)
  }

  return null
}

const TherapistTableListView = ({ therapists, roles }) => (
  <div className="therapist-view-table">
    <Table className="kokoro-table">
      <thead>
        <tr>
          <th className="text-left">Therapist</th>
          <th>Order</th>
          <th>Ratings</th>
          {trIncome(roles)}
          <th>Outlet</th>
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
              {tdIncome(roles, item.attributes.income)}
              <td>{item.attributes.outlets}</td>
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
  roles: PropTypes.array,
}

export default TherapistTableListView
