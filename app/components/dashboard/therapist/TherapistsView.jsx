import PropTypes from 'prop-types'
import { Table } from 'components/strap'

const TherapistsView = ({ therapists }) => (
  <Table className="kokoro-table">
    <thead>
      <tr>
        <th />
        <th>Order</th>
        <th>Income</th>
        <th>Duration</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {
        therapists.map((item, i) => (
          <tr key={i}>
            <td className="therapist">{item.attributes.name}</td>
            <td>10</td>
            <td>6.000.000</td>
            <td>73 Minutes</td>
            <td>{item.attributes.gender}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
)

TherapistsView.propTypes = {
  therapists: PropTypes.array.isRequired,
}

export default TherapistsView
