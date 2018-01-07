import PropTypes from 'prop-types'
import TherapistsView from 'components/dashboard/therapist/TherapistsView'

const Dashboard = ({ therapists }) => (
  <div>
    <div className="row">
      <div className="col-lg-12">

        <TherapistsView therapists={therapists} />

      </div>
    </div>
  </div>
)

Dashboard.propTypes = {
  therapists: PropTypes.array.isRequired,
}

export default Dashboard
